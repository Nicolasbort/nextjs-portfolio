import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header(props) {
  return (
    <header
      className={`text-white text-center bg-lightgray ${styles.header}`}
      id="header"
    >
      <div className="container d-flex align-items-center flex-column text-darkblue">
        <Image
          className="rounded-circle"
          src="/picture.jpeg"
          alt="Picture of the author"
          width={220}
          height={220}
        />

        <h1 className="fs-1 fw-bold mt-3">{props.name}</h1>

        <div className="divider_list">
          <div className="divider"></div>
          <div>
            <i className="fas fa-star"></i>
          </div>
          <div className="divider"></div>
        </div>

        <p className="fs-5 fw-bold">{props.field}</p>
      </div>
    </header>
  );
}
