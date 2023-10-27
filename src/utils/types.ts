interface Tab {
    title: string;
    width: number;
}

interface DataToTabs {
    [key: string]: string | number;
}

interface Props {
    tabs: Tab[];
    data: DataToTabs[];
    headBg?: string
}