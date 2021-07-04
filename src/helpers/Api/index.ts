export async function getDates(url: string) {
  const response = await fetch(url);
  return response.json();
}

export async function getFileSize(url: string) {
  const response = await fetch(url);
  return response.headers.get('content-length');
}




