import UploadVideo from '@/components/video/upload-video';

const UploadVideoPage = () => {
  return (
    <div className='flex flex-col gap-5 h-screen'>
      <h1 className='text-2xl font-semibold text-center mt-16'>Sube el video que más te guste</h1>

      <UploadVideo />
    </div>
  )
}

export default UploadVideoPage