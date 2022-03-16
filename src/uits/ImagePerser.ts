const ImagePerser = (id: string , option: string ="" ) =>{
    const baseUrl ='https://res.cloudinary.com/dsjrvocma/image/upload';
    return `${baseUrl} ${option ? option + ' /' : ''}${id}`;
}
export default ImagePerser;