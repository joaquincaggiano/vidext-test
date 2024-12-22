import UploadVideo from '@/components/video/upload-video';

const UploadVideoPage = () => {
  return (
    <div className='flex flex-col gap-16 h-screen'>
      <h1 className='text-2xl font-semibold'>Subir video</h1>

      <UploadVideo />
    </div>
  )
}

export default UploadVideoPage