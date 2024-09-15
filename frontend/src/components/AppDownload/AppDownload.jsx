import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mx-auto my-auto mt-[100px] text-large font-medium text-center' id='app-download'>
        <p>For Better Experience <br /> Tomato App</p>
        <div className='flex justify-center gap-custom mt-10'>
            <img src={assets.play_store} alt="" className='w-responsive max-w-[180px] cursor-pointer duration-500 hover:scale-105' />
            <img src={assets.app_store} alt="" className='w-responsive max-w-[180px] cursor-pointer duration-500 hover:scale-105' />
        </div>
    </div>
  )
}

export default AppDownload