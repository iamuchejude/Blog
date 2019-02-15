export default ({ article: { title } }) => (
  <div className="header">
    <h2 className="title">
      { title }  
    </h2>
    <p className="info">
      Posted in <a>JavaScript</a> on <span>5th of March, 2019.</span>
    </p>

    <style jsx>{`
      .header {
        padding: 40px 10px 15px 10px;
        text-align: center;
      }

      .title {
        font-weight: 500;
        font-size: 1.7em;
        margin: 5px 0;
      }

      .info {
        margin: 10px 0;
        font-size: .9em;
        font-weight: 100;
      }

      .info a,
      .info span {
        font-weight: 400;
      }
    `}</style>
  </div>
);
