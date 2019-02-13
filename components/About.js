export default () => (
  <div id="about">
    <div className="clear">
      <div className="left photo">
        <img src="/static/images/me.png" alt="Uche Jude" />
      </div>
      <div className="left info">
        <h3>
          Hi, I'm <span>Uche Jude</span>.<br/>Welcome to my seat of thoughts.
        </h3>
      </div>
    </div>

    <style jsx>{`
      #about {
        background: rgba(225, 225, 225, 0.0002);
        padding: 30px 0;
        min-height: 200px;
        box-sizing: border-box;
      }
      
      #about > div, #about > div > div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      #about > div div:last-child {
        box-sizing: border-box;
        width: calc(100% - 180px);
        padding: 0 10px;
      }

      #about > div div:first-child {
        width: 180px;
        padding: 0 20px 0 0;
      }

      #about > div img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      #about h3 {
        font-size: 1.8em;
        font-weight: 100;
        margin: 3px 0;
      }

      #about h3 span {
        font-weight: 500;
        color: #191970;
      }

      #about img {
        width: 300px;
      }
    `}</style>
  </div>
)