import styles from './sndl-app-lib.module.scss';

/* eslint-disable-next-line */
export interface SndlAppLibProps {}

export function SndlAppLib(props: SndlAppLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SndlAppLib!</h1>
    </div>
  );
}

export default SndlAppLib;
