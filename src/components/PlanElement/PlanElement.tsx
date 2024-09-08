import { Flex } from "antd";

export const PlanElement = ({
    num,
    text,
    type = "default",
}: {
    num: number;
    text: string;
    type?: "default" | "secondary";
}) => {
    return (
        <Flex
            gap={16}
            align="center"
            justify="center"
            style={{ minWidth: "18rem" }}
            className={
                `plan-elem` + (type === "secondary" ? " plan-elem--sec" : "")
            }
        >
            <div
                style={{
                    fontSize: "7rem",
                    lineHeight: "7.1rem",
                    fontWeight: "500",
                    minWidth: "5rem",
                }}
            >
                {num}
            </div>
            <p className="text">{text}</p>
        </Flex>
    );
};
