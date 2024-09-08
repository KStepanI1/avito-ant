import { Button, Carousel } from "antd";
import { NavPaths } from "../../config/navigation";

export const Cases = () => {
    return (
        <div id={NavPaths.CASES}>
            <section className="select-your-buis">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        maxWidth: "40%",
                    }}
                    className="select-buis-text"
                >
                    <h2 style={{ marginBottom: "0.5rem" }}>
                        <span
                            style={{
                                background: "var(--primary-color)",
                                padding: "0.2rem 0.25rem",
                                color: "white",
                            }}
                        >
                            Выдели
                        </span>{" "}
                        свой бизнес на фоне конкурентов
                    </h2>
                    <ul
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1rem",
                            fontSize: "1.4rem",
                        }}
                    >
                        <li>Логотипы</li>
                        <li>Баннеры</li>
                        <li>Картинки с УТП</li>
                        <li>Картинки с УТП</li>
                    </ul>
                </div>
                <div
                    style={{
                        width: "60%",
                    }}
                    className="carousel"
                >
                    <Carousel autoplay style={{ height: "100%" }} dots>
                        <div>
                            <h3 style={contentStyle}>Тут картинка номер 1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Тут картинка номер 2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Тут картинка номер 3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Тут картинка номер 4</h3>
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

const contentStyle: React.CSSProperties = {
    color: "#000",
    height: "20.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#d3f261",
};
