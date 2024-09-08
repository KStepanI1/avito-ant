import { Anchor, Layout as AntdLayout, Button, Flex } from "antd";
import { navigation } from "../../config/navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AntdLayout style={layoutStyle}>
            <AntdLayout.Header style={headerStyle}>
                <Flex justify="space-between" align="center">
                    <Anchor
                        direction="horizontal"
                        items={navigation}
                        className="anchor"
                    />
                    <Button type="primary">Оставить завяку</Button>
                </Flex>
            </AntdLayout.Header>

            <AntdLayout.Content style={contentStyle}>
                {children}
            </AntdLayout.Content>

            <AntdLayout.Footer style={footerStyle}>Footer</AntdLayout.Footer>
        </AntdLayout>
    );
};

const headerStyle: React.CSSProperties = {
    height: "50px",
    position: "sticky",
    top: 0,
    padding: "8px 16px",
    background: "white",
    zIndex: 100,
};
const contentStyle: React.CSSProperties = {
    overflow: "auto",
    height: "100%",
    padding: "1.5rem",
};

const footerStyle: React.CSSProperties = {};
const layoutStyle: React.CSSProperties = {};
