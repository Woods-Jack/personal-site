from langchain_community.document_loaders import AsyncChromiumLoader
from langchain_community.document_transformers import Html2TextTransformer
from langchain_text_splitters import MarkdownHeaderTextSplitter

slugs = ['/', '/cv']
md_headers_split = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

html2text = Html2TextTransformer()
markdown_splitter = MarkdownHeaderTextSplitter(md_headers_split)

def fetch_site_data(slugs):
  def get_url(slug):
    endpoint = 'https://jack-woods.co.uk'
    return endpoint + slug

  urls = map(get_url, slugs)

  print(urls)
  loader = AsyncChromiumLoader(urls, user_agent="JackGPTUserAgent")
  docs = loader.load()

  return docs


page_html = fetch_site_data(slugs)
docs = html2text.transform_documents(page_html)

for doc in docs:
  split_docs = markdown_splitter.split_text(doc.page_content)
  for split_doc in split_docs:
    print(split_doc)