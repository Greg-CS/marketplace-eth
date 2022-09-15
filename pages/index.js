import {  Hero, Breadcrumbs } from "@components/common"
import { CourseList } from "@components/course"
import BaseLayout from "@components/layout/base"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"
import { getAllCourses } from "@content/courses/fetcher"
export default function Home({courses}) {
  return (
      <BaseLayout>
        <Hero/>
        {JSON.stringify(courses)}
        <CourseList/>
      </BaseLayout>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data
    }
  }
}