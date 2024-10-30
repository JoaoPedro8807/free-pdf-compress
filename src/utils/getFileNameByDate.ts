const getZipFileNameWithDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const fileName = `compress_${year}-${month}-${day}_${hour}-${minute}-${second}.zip`;
    return fileName;
  }

export default getZipFileNameWithDate