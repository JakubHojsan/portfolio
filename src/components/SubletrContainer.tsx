import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubletrContainer.module.css";

type SubletrContainerType = {
  imageId?: string;
  projectImageUrls?: string;
  sublettingSolutionDescrip?: string;
  technologyStack?: string;
  problemSolutionDescriptio?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const SubletrContainer: FunctionComponent<SubletrContainerType> = ({
  imageId,
  projectImageUrls,
  sublettingSolutionDescrip,
  technologyStack,
  problemSolutionDescriptio,
  propWidth,
}) => {
  const alongsideSomeOfContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.project1}>
      <img className={styles.project1Child} alt="" src={imageId} />
      <i className={styles.subletr}>{projectImageUrls}</i>
      <i
        className={styles.alongsideSomeOfContainer}
        style={alongsideSomeOfContainerStyle}
      >
        <p className={styles.alongsideSomeOf}>{sublettingSolutionDescrip}</p>
        <p className={styles.alongsideSomeOf}>&nbsp;</p>
        <p className={styles.alongsideSomeOf}>{technologyStack}</p>
        <p className={styles.alongsideSomeOf}>&nbsp;</p>
        <p className={styles.alongsideSomeOf}>{problemSolutionDescriptio}</p>
      </i>
    </div>
  );
};

export default SubletrContainer;
