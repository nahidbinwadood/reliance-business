import bannerBg from '../assets/videos/banner-bg.mp4';

const HeroBg = () => {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center appearance-none focus:outline-none"
        src={bannerBg}
        autoPlay
        muted
        loop
      ></video>

      {/* shade */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,18,111,0.63)] via-[rgba(0,18,111,0.27)] to-[rgba(0,18,111,0.09)]" />
    </>
  );
};

export default HeroBg;
