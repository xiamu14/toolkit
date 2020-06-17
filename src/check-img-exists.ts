// 判断图片是否存在
export default function checkImgExists(imgURL: string) {
  return new Promise<boolean>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      if (img.width > 0 && img.height > 0) {
        resolve(true);
      }
      resolve(false);
    };
    img.onerror = reject;
    img.src = imgURL;
  });
}
