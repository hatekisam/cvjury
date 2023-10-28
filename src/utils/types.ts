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
  atsTabWidth: number[];
  atsData: ATSData[];
  salesTabWidth: number[];
  salesData: SalesData[];
  hardSkillsTabs: Tab[];
  hardSkillsData: DataToTabs[];
  softSkillsTabs: Tab[];
  softSkillsData: DataToTabs[];
}
