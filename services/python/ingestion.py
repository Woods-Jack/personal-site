from langchain_community.document_loaders import AsyncChromiumLoader
from langchain_community.document_transformers import Html2TextTransformer
from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

slugs = ['/', '/cv', '/technologies']
md_headers_split = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]
index_name = "jack-gpt"

html2text = Html2TextTransformer()
markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=md_headers_split, strip_headers=False)
embedding=OpenAIEmbeddings()

vectorstore = PineconeVectorStore(index_name=index_name, embedding=embedding)

def fetch_site_data(slugs):
  def get_url(slug):
    endpoint = 'https://jack-woods.co.uk'
    return endpoint + slug

  urls = map(get_url, slugs)

  loader = AsyncChromiumLoader(urls, user_agent="JackGPTUserAgent")
  docs = loader.load()

  return docs

def get_docs_from_html(page_html):
  split_docs = []

  docs = html2text.transform_documents(page_html)

  for doc in docs:
    split_docs = split_docs + markdown_splitter.split_text(doc.page_content)
  
  return split_docs

page_html = fetch_site_data(slugs)
clean_docs = get_docs_from_html(page_html)

vectorstore.delete(delete_all=True)
vectorstore.add_documents(clean_docs)