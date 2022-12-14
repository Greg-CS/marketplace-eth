import { Modal } from "@components/common";
import { 
  Curriculum, 
  Keypoints,
  CourseHero 
} from "@components/course";
import BaseLayout from "@components/layout/base";

export default function Course() {


  
    return (
      <BaseLayout>
      <div className="py-4">
        <CourseHero />
      </div>
        <Keypoints />
        <Curriculum/>
        <Modal/>
      </BaseLayout>
    )
  }