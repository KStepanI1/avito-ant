import { Button } from "antd";
import { NavPaths } from "../../config/navigation";
export const Main = () => {
    return (
        <section
            id={NavPaths.MAIN}
            style={{ background: "#d3f261", marginTop: "0" }}
        >
            <h1>Увеличьте продажи вашего бизнеса с помощью Авито!</h1>
            <p className="subtl">
                Профессиональное продвижение на Авито для малого и среднего
                бизнеса.
            </p>
            <Button
                style={{
                    fontSize: "1.3rem",
                    padding: "0.5rem 2rem",
                    height: "fit-content",
                }}
            >
                Оставить заявку
            </Button>
        </section>
    );
};
