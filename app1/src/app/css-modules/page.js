import page from "../page.module.css";
import custom from "../custom.module.css"
const CSSModules = () => {
  return (
    <>
    <h2 className="main">CSS Modules In Next JS</h2>
    <h2 className={page.main}>Pranav Verma</h2>
    <h2 className={custom.main}>Shalaj Verma</h2>
    </>
  )
}

export default CSSModules