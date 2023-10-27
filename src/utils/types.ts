interface Tab {
  title: string;
  width: number;
}

interface DataToTabs {
  [key: string]: string | number;
}

interface TableProps {
  tabs: Tab[];
  data: DataToTabs[];
  headBg?: string;
}

interface ResumeSkillsProps {
  hardTitles: Tab[];
  softTitles: Tab[];
  hardSkills: DataToTabs[];
  softSkills: DataToTabs[];
}
