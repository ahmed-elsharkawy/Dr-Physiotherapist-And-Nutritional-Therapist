import "./ourVideo.css";
import PropTypes from "prop-types";

const OurVideo = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/ynC_MRPBoyM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

OurVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default OurVideo;
