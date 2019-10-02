import { storage } from "./FirebaseLoader";


export default async function Upload(file, path, metadata = {}) {
  let collection = storage.ref(path + "/" + file.name)
  let snapshot = await collection.put(file, metadata)
  let url = await snapshot.ref.getDownloadURL()
  return { snapshot, url }
}