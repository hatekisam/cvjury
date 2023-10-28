interface Tab {
  title: string;
  width: number;
  background?:string
}

interface DataToTabs {
  [key: string]: string | number | boolean;
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

interface ATSData {
  title: string;
  confirmed: boolean;
  body: string;
}

interface SalesData {
  title: string;
  confirmed: boolean;
  body: string;
}

interface AllMatchesProps {
  atsTabs: Tab[];
  atsData: DataToTabs[];
  salesTabs: Tab[];
  salesData: DataToTabs[];
  hardSkillsTabs: Tab[];
  hardSkillsData: DataToTabs[];
  softSkillsTabs: Tab[];
  softSkillsData: DataToTabs[];
  softSkillsList: string[];
}
