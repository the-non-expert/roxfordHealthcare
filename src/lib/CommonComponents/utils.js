export function gsToHttp(gsUrl) {
  const baseUrl =
    "https://firebasestorage.googleapis.com/v0/b/roxford-healthcare.appspot.com/o/";
  const filePath = gsUrl.replace("gs://roxford-healthcare.appspot.com/", "");
  const encodedFilePath = encodeURIComponent(filePath);
  return `${baseUrl}${encodedFilePath}?alt=media`;
}
