export interface Company {
  name: string;
  role: string;
  proj_name: string;
  details: string;
  image: string; 
  method: string[];
  display: string[];
  proj_img: string[];

}
export interface TimelineSection {
  title: string;
  items: string[];
  img: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  skills: string[];
  link: string;
}