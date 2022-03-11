import  Image from 'next/image';
interface ImageSrc{
    sr: StaticImageData,
    alt:string
   }

function Images(props: ImageSrc){
    return( <Image src={props.sr} alt={props.alt} /> )
}

export default Images;