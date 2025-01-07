import React from "react";
class PlaybookGallery extends React.Component {
    render() {
      const containerStyle = {
        height: '600px',
        backgroundColor: 'lightblue', // Change this color to your desired background color
      };
  
      return (
        <div style={containerStyle}>
          <iframe
            src="https://www.playbook.com/e/mm2k23/5M6uoLaSsQ48kNe2JmBoB42y?theme=gallery"
            title="gallery - Playbook.com"
            sandbox="allow-same-origin allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      );
    }
  }
  
  export default PlaybookGallery;
  