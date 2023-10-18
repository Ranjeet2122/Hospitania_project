import React, { useState } from "react";
import style from "../Style/Search.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";

function DropDowns() {
  const [isMedicinensHovered, setIsMedicinensHovered] = useState(false);
  const [isCovidPreventionHovered, setIsCovidPreventionHovered] =
    useState(false);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);
  const [isFitnessHovred, setIsFitnessHovered] = useState(false);
  const [isDiabetesHovered, setIsDiabetesHover] = useState(false);
  const [isCovidTestHovered, setIsCovidTestHovered] = useState(false);
  const [isPopularHovered, setIsPopularHovered] = useState(false);
  const [isSupplementsHovred, setIsSupplementsHovred] = useState(false);
  const [isNutritionHovered, setIsNutritionHovered] = useState(false);

  // ========================================

  const handleMedicinensMouseEnter = () => {
    setIsMedicinensHovered(true);
    setIsCovidPreventionHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handleCovidPreventionMouseEnter = () => {
    setIsCovidPreventionHovered(true);
    setIsMedicinensHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handleFeaturedHovered = () => {
    setIsFeaturedHovered(true);
    setIsCovidPreventionHovered(false);
    setIsMedicinensHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handleFitnessHovered = () => {
    setIsFitnessHovered(true);
    setIsFeaturedHovered(false);
    setIsCovidPreventionHovered(false);
    setIsMedicinensHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handleDiabetesHovered = () => {
    setIsDiabetesHover(true);
    setIsFitnessHovered(false);
    setIsFeaturedHovered(false);
    setIsCovidPreventionHovered(false);
    setIsMedicinensHovered(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };
  const handleCovidTestMouseEnter = () => {
    setIsCovidTestHovered(true);
    setIsDiabetesHover(false);
    setIsFitnessHovered(false);
    setIsFeaturedHovered(false);
    setIsCovidPreventionHovered(false);
    setIsMedicinensHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handlePopularHovered = () => {
    setIsPopularHovered(true);
    setIsMedicinensHovered(false);
    setIsCovidPreventionHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
  };

  const handleSupplementsHovered = () => {
    setIsSupplementsHovred(true);
    setIsPopularHovered(false);
    setIsMedicinensHovered(false);
    setIsCovidPreventionHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
    setIsNutritionHovered(false);
  };

  const handleNutritionHovered = () => {
    setIsNutritionHovered(true);
    setIsSupplementsHovred(false);
    setIsPopularHovered(false);
    setIsMedicinensHovered(false);
    setIsCovidPreventionHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsDiabetesHover(false);
    setIsCovidTestHovered(false);
  };

  // ==============================================================
  const handleMouseLeave = () => {
    setIsMedicinensHovered(false);
    setIsCovidPreventionHovered(false);
    setIsFeaturedHovered(false);
    setIsFitnessHovered(false);
    setIsCovidTestHovered(false);
    setIsPopularHovered(false);
    setIsSupplementsHovred(false);
    setIsNutritionHovered(false);
    setIsDiabetesHover(false);
  };
  return (
    <div>
      <div className={style.DropDownnav}>
        <div className={style.Maincontainer}>
          {/*================================================================================================================================================ */}
          {/* Medicinens Section */}

          <div className={style.container}>
            <p
              onMouseEnter={handleMedicinensMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                {" "}
                AllMedicinens
                <AiOutlineCaretDown />{" "}
              </p>

              {isMedicinensHovered && (
                <div className={style.shawdo}>
                  <div className={style.box}>
                    <ul className={style.Unorderlist}>
                      <li className={style.list}>
                        <a>Medicinens one</a>
                      </li>
                      <li className={style.list}>
                        <a>Medicinens two</a>
                      </li>
                      <li className={style.list}>
                        <a>Medicinens three</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </p>
          </div>

          {/* ================================================================================================================================================================================================================================================ */}

          {/* COVID Prevention Section */}

          <div className={style.container}>
            <p
              onMouseEnter={handleCovidPreventionMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                {" "}
                COVID_Prevention
                <AiOutlineCaretDown />
              </p>

              {isCovidPreventionHovered && (
                <div className={style.shawdo}>
                  <div className={style.box}>
                    <ul className={style.Unorderlist}>
                      <li className={style.list}>
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className={style.list}>
                        <a>Masks</a>
                      </li>
                      <li className={style.list}>
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className={style.list}>
                        <a>Masks</a>
                      </li>
                      <li className={style.list}>
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className={style.list}>
                        <a>Masks</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </p>
          </div>

          {/* ============================================================================================================================================================================ */}

          {/* Featured */}

          <div className={style.container}>
            <p
              onMouseEnter={handleFeaturedHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Featured
                <AiOutlineCaretDown />
              </p>

              {isFeaturedHovered && (
                <div className={style.shawdo}>
                  <div className={style.box}>
                    {/* Vertical Line */}
                    <div className="vertical-line"></div>
                    {/* Horizontal List */}
                    <div className="horizontal-list">
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          fontSize: "08px",
                        }}
                      >
                        <li className={style.list}>
                          <li className={style.list}> Flash Deals</li>
                          <li className={style.list}>Top Health Products</li>
                          <li className={style.list}>Summer Essitential</li>
                          <li className={style.list}>Trading Products</li>
                          <li className={style.list}>Flash Deals</li>
                          <li className={style.list}>Top Health Products</li>
                          <li className={style.list}>Summer Essitential</li>
                          <li className={style.list}>Trading Products</li>
                        </li>

                        <div class="vr"></div>

                        <li className={style.list}>
                          <li className={style.list}>Flash Deals</li>
                          <li className={style.list}>Top Health Products</li>
                          <li className={style.list}>Summer Essitential</li>
                          <li className={style.list}>Trading Products</li>
                          <li className={style.list}>Flash Deals</li>
                          <li className={style.list}>Top Health Products</li>
                          <li className={style.list}>Summer Essitential</li>
                          <li className={style.list}>Trading Products</li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

          {/*=========================================================================================================================================================================================  */}

          {/* Fitness */}

          <div className={style.container}>
            <p
              onMouseEnter={handleFitnessHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Fitness
                <AiOutlineCaretDown />
              </p>
              {isFitnessHovred && (
                <div className={style.shawdo}>
                  <div className={style.box}>
                    {/* Vertical Line */}
                    <div className="vertical-line"></div>
                    {/* Horizontal List */}
                    <div className="horizontal-list">
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",

                          fontSize: "07px",
                          padding: "4px",
                        }}
                      >
                        <li className={style.list}>
                          <b className={style.list}>Vitamins & Supplements</b>
                          <li className={style.list}>Multivitamins</li>
                          <li className={style.list}>Vitamins A-Z</li>
                          <li className={style.list}>Minal Supplements</li>
                          <li className={style.list}>
                            <strong className={style.list}>
                              Nutritional Drinks
                            </strong>
                            <li className={style.list}>for Adulta</li>
                            <li className={style.list}>for Children</li>
                            <li className={style.list}>for Women</li>
                          </li>
                          <li>
                            <b className={style.list}>Health Food & Drinks</b>
                            <li className={style.list}>
                              Green tea and harbal tea
                            </li>
                            <li className={style.list}>Harbal Juice</li>
                            <li className={style.list}>Apple cider vinegar</li>
                            <li className={style.list}>Health Snaks</li>
                          </li>
                        </li>

                        <div
                          class="vr"
                          style={{ backgroundColor: "white" }}
                        ></div>

                        <li>
                          <b className={style.list}>Vitamins & Supplements</b>
                          <li className={style.list}>Multivitamins</li>
                          <li className={style.list}>Vitamins A-Z</li>
                          <li className={style.list}>Minal Supplements</li>
                          <li className={style.list}>
                            <b className={style.list}>Nutritional Drinks</b>
                            <li className={style.list}>for Adulta</li>
                            <li className={style.list}>for Children</li>
                            <li className={style.list}>for Women</li>
                          </li>
                          <li>
                            <b className={style.list}>Health Food & Drinks</b>
                            <li className={style.list}>
                              Green tea and harbal tea
                            </li>
                            <li className={style.list}>Harbal Juice</li>
                            <li className={style.list}>Apple cider vinegar</li>
                            <li className={style.list}>Health Snaks</li>
                          </li>
                        </li>

                        <div
                          class="vr"
                          style={{ backgroundColor: "white", padding: "2px " }}
                        ></div>

                        <li>
                          <b className={style.list}>Vitamins & Supplements</b>
                          <li className={style.list}>Multivitamins</li>
                          <li className={style.list}>Vitamins A-Z</li>
                          <li className={style.list}>Minal Supplements</li>
                          <li>
                            <b className={style.list}>Nutritional Drinks</b>
                            <li className={style.list}>for Adulta</li>
                            <li className={style.list}>for Children</li>
                            <li className={style.list}>for Women</li>
                          </li>
                          <li>
                            <b className={style.list}>Health Food & Drinks</b>
                            <li className={style.list}>
                              Green tea and harbal tea
                            </li>
                            <li className={style.list}>Harbal Juice</li>
                            <li className={style.list}>Apple cider vinegar</li>
                            <li className={style.list}>Health Snaks</li>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

          {/*================================================================================================================================================== */}

          {/* Diabetes */}

          <div className={style.container}>
            <p
              onMouseEnter={handleDiabetesHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Diabetes
                <AiOutlineCaretDown />
              </p>

              {isDiabetesHovered && (
                <div className={style.shawdo}>
                  <div className="collapsible-container">
                    <div className={style.box}>
                      {/* Vertical Line */}
                      <div className="vertical-line"></div>
                      {/* Horizontal List */}
                      <div className="horizontal-list">
                        <ul
                          style={{
                            listStyleType: "none",
                            display: "flex",

                            fontSize: "08px",
                          }}
                        >
                          <li className="p-1">
                            {" "}
                            <li>Vitamins & Supplements</li>
                            <li className="p-1">Multivitamins</li>
                            <li className="p-1">Vitamins A-Z</li>
                            <li className="p-1">Minal Supplements</li>
                            <br />
                            <b>Trading Products</b>
                            <br />
                            <b>Top Deals</b>
                            <br />
                            <b>Top Health Products</b>
                            <br />
                            <b>Summer essential</b>
                            <br />
                            <b>Trading Products</b>
                          </li>

                          <div class="vr" style={{ height: "80px" }}></div>

                          <li className="p-1">
                            <b>Health Food & Drinks</b>
                            <li className="p-1">Green tea and harbal tea</li>
                            <li className="p-1">Harbal Juice</li>
                            <li className="p-1">Apple cider vinegar</li>
                            <li className="p-1">Health Snaks</li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

        {/* ========================================================================================================================================================================= */}

          {/*  COVID test*/}

          <div className={style.container}>
            <p
              onMouseEnter={handleCovidTestMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                COVID_Test
                <AiOutlineCaretDown />
              </p>

              {isCovidTestHovered && (
                <div className={style.shawdo}>
                  <div
                    className={style.box}
                    style={{
                      display: "inline-block",
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    <ul style={{ listStyleType: "none", fontSize: "08px" }}>
                      <li className="p-1">
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className="p-1">
                        <a>Masks</a>
                      </li>
                      <li className="p-1">
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className="p-1">
                        <a>Masks</a>
                      </li>
                      <li className="p-1">
                        <a>Boost Your Immunity</a>
                      </li>
                      <li className="p-1">
                        <a>Masks</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </p>
          </div>

  {/*=======================================================================================================================================================*/}

          {/* Popular */}

          <div className={style.container}>
            <p
              onMouseEnter={handlePopularHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Popular
                <AiOutlineCaretDown />
              </p>

              {isPopularHovered && (
                <div className={style.shawdo}>
                  <div
                    className={style.box}
                    style={{
                      display: "inline-block",
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    {/* Vertical Line */}
                    <div className="vertical-line"></div>
                    {/* Horizontal List */}
                    <div className="horizontal-list">
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          fontSize: "08px",
                        }}
                      >
                        <li className="p-1">
                          <li className="p-1">Flash Deals </li>
                          <li className="p-1">Top Health Products</li>
                          <li className="p-1">Summer Essitential</li>
                          <li className="p-1">Trading Products</li>
                          <li className="p-1">Flash Deals</li>
                          <li className="p-1">Top Health Products</li>
                          <li className="p-1">Summer Essitential</li>
                          <li className="p-1">Trading Products</li>
                        </li>

                        <div class="vr"></div>

                        <li className="p-1">
                          <li className="p-1"> Flash Deals</li>
                          <li className="p-1">Top Health Products</li>
                          <li className="p-1">Summer Essitential</li>
                          <li className="p-1">Trading Products</li>
                          <li className="p-1">Flash Deals</li>
                          <li className="p-1">Top Health Products</li>
                          <li className="p-1">Summer Essitential</li>
                          <li className="p-1">Trading Products</li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

 {/*=======================================================================================================================================================*/}

          {/* Supplements */}

          <div className={style.container}>
            <p
              onMouseEnter={handleSupplementsHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Supplements
                <AiOutlineCaretDown />
              </p>

              {isSupplementsHovred && (
                <div className={style.shawdo}>
                  <div className={style.box}>
                    {/* Vertical Line */}
                    <div className="vertical-line"></div>
                    {/* Horizontal List */}
                    <div className="horizontal-list">
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          padding: "4px",
                          fontSize: "07px",
                        }}
                      >
                        <li>
                          <b>Vitamins & Supplements</b>
                          <li>Multivitamins</li>
                          <li>Vitamins A-Z</li>
                          <li>Minal Supplements</li>
                          <li>
                            <b>Nutritional Drinks</b>
                            <li>for Adulta</li>
                            <li>for Children</li>
                            <li>for Women</li>
                          </li>
                          <li>
                            <b>Health Food & Drinks</b>
                            <li>Green tea and harbal tea</li>
                            <li>Harbal Juice</li>
                            <li>Apple cider vinegar</li>
                            <li>Health Snaks</li>
                          </li>
                        </li>

                        <div
                          class="vr"
                          style={{ backgroundColor: "white", padding: "3px" }}
                        ></div>

                        <li>
                          <b>Vitamins & Supplements</b>
                          <li>Multivitamins</li>
                          <li>Vitamins A-Z</li>
                          <li>Minal Supplements</li>
                          <li>
                            <b>Nutritional Drinks</b>
                            <li>for Adulta</li>
                            <li>for Children</li>
                            <li>for Women</li>
                          </li>
                          <li>
                            <b>Health Food & Drinks</b>
                            <li>Green tea and harbal tea</li>
                            <li>Harbal Juice</li>
                            <li>Apple cider vinegar</li>
                            <li>Health Snaks</li>
                          </li>
                        </li>

                        <div
                          class="vr"
                          style={{ backgroundColor: "white", padding: "3px" }}
                        ></div>

                        <li>
                          <b>Vitamins & Supplements</b>
                          <li>Multivitamins</li>
                          <li>Vitamins A-Z</li>
                          <li>Minal Supplements</li>
                          <li>
                            <b>Nutritional Drinks</b>
                            <li>for Adulta</li>
                            <li>for Children</li>
                            <li>for Women</li>
                          </li>
                          <li>
                            <b>Health Food & Drinks</b>
                            <li>Green tea and harbal tea</li>
                            <li>Harbal Juice</li>
                            <li>Apple cider vinegar</li>
                            <li>Health Snaks</li>
                          </li>
                        </li>

                        <div
                          class="vr"
                          style={{ backgroundColor: "white", padding: "3px" }}
                        ></div>

                        <li>
                          <b>Vitamins & Supplements</b>
                          <li>Multivitamins</li>
                          <li>Vitamins A-Z</li>
                          <li>Minal Supplements</li>
                          <li>
                            <b>Nutritional Drinks</b>
                            <li>for Adulta</li>
                            <li>for Children</li>
                            <li>for Women</li>
                          </li>
                          <li>
                            <b>Health Food & Drinks</b>
                            <li>Green tea and harbal tea</li>
                            <li>Harbal Juice</li>
                            <li>Apple cider vinegar</li>
                            <li>Health Snaks</li>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

 {/*=======================================================================================================================================================*/}

          {/* Nutrition */}

          <div className={style.container}>
            <p
              onMouseEnter={handleNutritionHovered}
              onMouseLeave={handleMouseLeave}
            >
              <p>
                Nutrition
                <AiOutlineCaretDown />
              </p>
              {isNutritionHovered && (
                <div className={style.shawdo}>
                  <div
                    className={style.box}
                    style={{
                      display: "inline-block",
                      width: "auto",
                      height: "auto",
                      padding: "4px",
                      fontSize: "08px",
                    }}
                  >
                    {/* Vertical Line */}
                    <div className="vertical-line"></div>
                    {/* Horizontal List */}
                    <div className="horizontal-list">
                      <ul
                        style={{
                          listStyleType: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "08px",
                        }}
                      >
                        <li className="p-1">
                          {" "}
                          <b>Vitamins & Supplements</b>
                          <li className="p-1">Multivitamins</li>
                          <li className="p-1">Vitamins A-Z</li>
                          <li className="p-1">Minal Supplements</li>
                          <br />
                          <b>Trading Products</b>
                          <br />
                          <b>Top Deals</b>
                          <br />
                          <b>Top Health Products</b>
                          <br />
                          <b>Summer essential</b>
                          <br />
                          <b>Trading Products</b>
                        </li>

                        <div class="vr" style={{ height: "90px" }}></div>

                        <li className="p-1">
                          {" "}
                          <b>Health Food & Drinks</b>
                          <li className="p-1">Green tea and harbal tea</li>
                          <li className="p-1">Harbal Juice</li>
                          <li className="p-1">Apple cider vinegar</li>
                          <li className="p-1">Health Snaks</li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>

          {/* ------------------------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default DropDowns;
