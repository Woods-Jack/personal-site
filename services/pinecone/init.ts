import { Pinecone } from "@pinecone-database/pinecone"

const initPineconeIndex = () => {
  const pc = new Pinecone();
  const index = pc.Index("jack-gpt")

  return index
};

export default initPineconeIndex;