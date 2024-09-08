import { Button } from "antd";
import { NavPaths } from "../../config/navigation";

export const Contacts = () => {
    return (
        <section id={NavPaths.CONTACTS}>
            <h2 style={{ textAlign: "center" }}>
                Хотите увеличить продажи через Авито? <br />
                <span style={{ color: "var(--primary-color)" }}>
                    Оставляйте заявку!
                </span>
            </h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    style={{
                        fontSize: "1.5rem",
                        height: "fit-content",
                        borderRadius: "1.5rem",
                        padding: "0.5rem 2rem",
                    }}
                    type="primary"
                >
                    Хочу!
                </Button>
            </div>
        </section>
    );
};
