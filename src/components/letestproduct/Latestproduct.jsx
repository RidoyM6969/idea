import React from "react";
import Container from "../extracomp/Container";
import LetestproReuseable from "../letestproduct/LetestproReuseable";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import shop from "../../assets/shop.png";
import black from "../../assets/black.png";
import tab from "../../assets/tab.png";
import white from "../../assets/white.png";

const Latestproduct = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <h2 className="text-[42px] capitalize font-bold text-[#1A0B5B] text-center ">
          Leatest Products
        </h2>
        <div className="pt-[29px]">
          <Tabs>
            <TabList className="text-center">
              <Tab>New Arrival</Tab>
              <Tab>Best Seller</Tab>
              <Tab>Featured</Tab>
              <Tab>Special Offer</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-wrap justify-between">
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={white}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-between">
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={shop}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-between">
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />

                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={tab}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap justify-between">
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
                <LetestproReuseable
                  img={black}
                  title="Comfort Handy Craft"
                  price="42.00"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Latestproduct;
