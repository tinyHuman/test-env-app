import { Env } from "@humanwhocodes/env";
import styles from "./page.module.css";

export default async function Home() {

    const env = new Env()
    const res = await fetch(env.get("FUNC_URL"))
    let items = await res.json()


    return (
        <>
            <h1>Welcome</h1>
            <div>
                {items && items.map((item) => {
                    return <p key={item.id}>{item.text}</p>
                })}
            </div>
        </>
    );
}

