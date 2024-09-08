import { Button, Flex } from "antd";
import { NavPaths } from "../../config/navigation";
import { PlanElement } from "../PlanElement/PlanElement";

export const About = () => {
    return (
        <div id={NavPaths.ABOUT}>
            <section>
                <Flex style={{ flexDirection: "column" }}>
                    <h2 style={{ maxWidth: "40%", padding: "0", margin: "0" }}>
                        Мы{" "}
                        <span style={{ color: "var(--primary-color)" }}>—</span>{" "}
                        <br />
                        рекламное <br /> агентство
                    </h2>
                    <p style={{ maxWidth: "50%" }} className="desc">
                        Более 9 лет эффективно настраиваем рекламу и помогаем
                        предпринимателям успешно продвигать свой бизнес на
                        Авито.
                    </p>
                </Flex>
            </section>
            <section>
                <Flex gap={"2rem"} className="about__plan">
                    <h2 style={{ maxWidth: "30%" }}>
                        Бесплатно проведём разбор вашего бизнеса на Авито!
                    </h2>
                    <div className="plan">
                        <PlanElement
                            num={1}
                            text="Определим целевую аудиторию и упакуем продукт"
                        />
                        <PlanElement
                            num={2}
                            text="Определим целевую аудиторию и упакуем продукт"
                            type="secondary"
                        />
                        <PlanElement
                            num={3}
                            text="Определим целевую аудиторию и упакуем продукт"
                        />
                        <PlanElement
                            num={4}
                            text="Определим целевую аудиторию и упакуем продукт"
                            type="secondary"
                        />
                        <PlanElement
                            num={5}
                            text="Определим целевую аудиторию и упакуем продукт"
                        />

                        <PlanElement
                            num={6}
                            text="Определим целевую аудиторию и упакуем продукт"
                            type="secondary"
                        />
                    </div>
                </Flex>
            </section>
            <section className="with-bg">
                <Flex
                    align="center"
                    justify="center"
                    style={{
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <h2>Выведем ваш бизнес на Авито за 3 дня</h2>
                    <p className="text">от 40 000 ₽ в месяц</p>
                </Flex>
            </section>
        </div>
    );
};
