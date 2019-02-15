import Link from 'next/link';

export default () => (
  <nav>
    <a
      href="javascript:void(0)"
      id="harmbuger"
    >
      <div></div>
      <div></div>
      <div></div>
    </a>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/bookmarked">
          <a>Bookmarked</a>
        </Link>
      </li>
      <li>
        <Link href="/newsletter">
          <a>Newsletter</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
      }

      #harmbuger {
        width: 30px;
        cursor: pointer;
        display: none;
      }

      #harmbuger div {
        border: 1px solid #000;
        background: #000;
        width: 100%;
        margin: 2px 0;
        height: 3px;
        display: block;
        float: right;
      }

      #harmbuger div:nth-child(2) {
        width: 75%;
      }

      ul li {
        float: left;
        padding: 0 15px;
      }

      ul li:last-child {
        padding-right: 0;
      }

      ul li:first-child {
        padding-left: 0;
      }

      @media only screen and (max-width: 600px) {
        nav ul {
          display: none;
        }

        #harmbuger {
          display: inline-block;
        }
      }
    `}</style>
  </nav>
);