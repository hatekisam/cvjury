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
interface JobSkillsProps {
  hardTitles: Tab[];
  softTitles: Tab[];
  hardSkills: DataToTabs[];
  softSkills: DataToTabs[];
}

interface DesirableSkills {
  tableTitles: Tab[];
  tableData: DataToTabs[];
}

interface JobResumeProps {
    tableTitles: Tab[];
    tableData: DataToTabs[];
  }