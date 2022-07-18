import Test from "../examples/PackageDemo"
import { PrintMe, PrintMeToo } from "../examples/PackageDemo"

export default function Demo(props) {
    return (
        <>
            <h1>React Demo Examples</h1>
            <Test />
            <PrintMe />
            <PrintMeToo />
        </>
    )
}