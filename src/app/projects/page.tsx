"use client";
import { ProjectsBaseComponent } from '@/app/components/projects-components/ProjectsBaseComponent';
import { IProjectBaseData } from '@/app/interfaces/ITypeData';
import { projectsData } from '@/app/variables/projectsVariables';
import { notFound } from 'next/navigation';
import { CardBackgroundComponent } from '../components/shared-components/CardBackgroundComponent';





export default async function HouseTypes({ params }: any) {
  // const {type}= await params;

  // const fetchData= ():IProjectBaseData => {
  //     try {
  //         const response:IProjectBaseData= projectsData[type]
  //         if (!response){
  //             notFound();
  //         }

  //         return response;
  //     } catch (error) {
  //            notFound();
  //     }
  // }

  // const projectDataResult = fetchData();



  return (
    <div className='-mt-[80px] pb-[120px] gap-y-24 flex flex-col'>
      <CardBackgroundComponent imagePath='/images/pictures/pages/project.webp' title='Projects' />
      <ProjectsBaseComponent title={"Renovations"} projectData={projectsData["renovation"]} />
    </div>

  )
}
