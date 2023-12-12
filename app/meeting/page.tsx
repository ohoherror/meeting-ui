'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import MeetingList from './components/list'

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="会议室列表">
          <MeetingList></MeetingList>
        </Tab>
        <Tab key="music" title="预定历史">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
   
      </Tabs>
    </div>  
  );
}
