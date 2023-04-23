<h2>The sources for the data in this Maryland Covid-19 analysis project:</h2>
1. Maryland Jurisdictions Population and Housing Unit Summary. (n.d.). Planning. https://planning.maryland.gov/MSDC/Pages/census/Census2020/2020-pop_hu-summary.aspx<br>
2. MD COVID-19 - Cases by County | Open Data | opendata.maryland.gov. (2023, April 21). https://opendata.maryland.gov/Health-and-Human-Services/MD-COVID-19-Cases-by-County/tm86-dujs<br>
3. Census 2020 P.L. 94-171 Data. (n.d.). Planning. https://planning.maryland.gov/MSDC/Pages/census/Census2020/pL_2020redistricting.aspx

{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "8e66ca74",
   "metadata": {},
   "source": [
    "<b>This is my exploration into Maryland's cases of Covid-19 from the years 2020 to 2023."
   ]
  },
  {
   "cell_type": "markdown",
   "id": "89e6e2b2",
   "metadata": {},
   "source": [
    "<h2><u> Data Optimization / Cleaning and Importing"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "00b1c4fb",
   "metadata": {},
   "outputs": [],
   "source": [
    "#Importing packages and setting options\n",
    "import pandas as pd\n",
    "pd.set_option(\"precision\", 3)\n",
    "import matplotlib.pyplot as plt\n",
    "import numpy as np\n",
    "%matplotlib inline \n",
    "plt.style.use(\"fivethirtyeight\")"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "8211160d",
   "metadata": {},
   "source": [
    "I first went to <a href =\"https://opendata.maryland.gov/\" target = \"_blank\"> Open Data Maryland </a> to access the MD Covid-19 Cases by county dataset.\n",
    "\n",
    "I then imported the dataset into a Pandas dataframe object."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "41ac2f41",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Allegany</th>\n",
       "      <th>Anne_Arundel</th>\n",
       "      <th>Baltimore</th>\n",
       "      <th>Baltimore_City</th>\n",
       "      <th>Calvert</th>\n",
       "      <th>Caroline</th>\n",
       "      <th>Carroll</th>\n",
       "      <th>Cecil</th>\n",
       "      <th>Charles</th>\n",
       "      <th>Dorchester</th>\n",
       "      <th>...</th>\n",
       "      <th>Montgomery</th>\n",
       "      <th>Prince_Georges</th>\n",
       "      <th>Queen_Annes</th>\n",
       "      <th>Somerset</th>\n",
       "      <th>St_Marys</th>\n",
       "      <th>Talbot</th>\n",
       "      <th>Washington</th>\n",
       "      <th>Wicomico</th>\n",
       "      <th>Worcester</th>\n",
       "      <th>Unknown</th>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>DATE</th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>2020-03-15 06:00:00</th>\n",
       "      <td>0</td>\n",
       "      <td>2</td>\n",
       "      <td>3</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>...</td>\n",
       "      <td>12</td>\n",
       "      <td>9</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2020-03-16 06:00:00</th>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>4</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>...</td>\n",
       "      <td>10</td>\n",
       "      <td>15</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2020-03-17 06:00:00</th>\n",
       "      <td>0</td>\n",
       "      <td>3</td>\n",
       "      <td>6</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>...</td>\n",
       "      <td>24</td>\n",
       "      <td>14</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2020-03-18 06:00:00</th>\n",
       "      <td>0</td>\n",
       "      <td>4</td>\n",
       "      <td>10</td>\n",
       "      <td>4</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>2</td>\n",
       "      <td>0</td>\n",
       "      <td>...</td>\n",
       "      <td>31</td>\n",
       "      <td>20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2020-03-19 06:00:00</th>\n",
       "      <td>0</td>\n",
       "      <td>5</td>\n",
       "      <td>12</td>\n",
       "      <td>8</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>2</td>\n",
       "      <td>0</td>\n",
       "      <td>2</td>\n",
       "      <td>0</td>\n",
       "      <td>...</td>\n",
       "      <td>33</td>\n",
       "      <td>23</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>5 rows × 25 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "                     Allegany  Anne_Arundel  Baltimore  Baltimore_City  \\\n",
       "DATE                                                                     \n",
       "2020-03-15 06:00:00         0             2          3               1   \n",
       "2020-03-16 06:00:00         0             1          4               1   \n",
       "2020-03-17 06:00:00         0             3          6               1   \n",
       "2020-03-18 06:00:00         0             4         10               4   \n",
       "2020-03-19 06:00:00         0             5         12               8   \n",
       "\n",
       "                     Calvert  Caroline  Carroll  Cecil  Charles  Dorchester  \\\n",
       "DATE                                                                          \n",
       "2020-03-15 06:00:00        0         0        1      0        1           0   \n",
       "2020-03-16 06:00:00        0         0        1      0        1           0   \n",
       "2020-03-17 06:00:00        0         0        1      0        1           0   \n",
       "2020-03-18 06:00:00        0         0        1      0        2           0   \n",
       "2020-03-19 06:00:00        1         0        2      0        2           0   \n",
       "\n",
       "                     ...  Montgomery  Prince_Georges  Queen_Annes  Somerset  \\\n",
       "DATE                 ...                                                      \n",
       "2020-03-15 06:00:00  ...          12               9            0         0   \n",
       "2020-03-16 06:00:00  ...          10              15            0         0   \n",
       "2020-03-17 06:00:00  ...          24              14            0         0   \n",
       "2020-03-18 06:00:00  ...          31              20            0         0   \n",
       "2020-03-19 06:00:00  ...          33              23            0         0   \n",
       "\n",
       "                     St_Marys  Talbot  Washington  Wicomico  Worcester  \\\n",
       "DATE                                                                     \n",
       "2020-03-15 06:00:00         0       0           0         0          0   \n",
       "2020-03-16 06:00:00         0       1           0         0          0   \n",
       "2020-03-17 06:00:00         0       1           0         0          0   \n",
       "2020-03-18 06:00:00         0       1           0         0          0   \n",
       "2020-03-19 06:00:00         0       1           0         0          0   \n",
       "\n",
       "                     Unknown  \n",
       "DATE                          \n",
       "2020-03-15 06:00:00        0  \n",
       "2020-03-16 06:00:00        0  \n",
       "2020-03-17 06:00:00        0  \n",
       "2020-03-18 06:00:00        0  \n",
       "2020-03-19 06:00:00        0  \n",
       "\n",
       "[5 rows x 25 columns]"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "url = \"https://opendata.maryland.gov/api/views/tm86-dujs/rows.csv?accessType=DOWNLOAD\"\n",
    "covid = pd.read_csv(url, index_col = \"DATE\")\n",
    "covid.index = pd.DatetimeIndex(covid.index) #Convert the DATE column into a datetime index object\n",
    "covid.drop(\"OBJECTID\", axis = 1 , inplace = True) #Removing the Object ID column\n",
    "#covid.drop(\"Unknown\",axis = 1, inplace = True) #Removing the Unknown column as it is filled with 0 cases\n",
    "covid.head(5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "eaa90c2b",
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Number of 0's in Unknown column:  1133\n",
      "Number of values counted by len in Unknown Column:  1133\n"
     ]
    }
   ],
   "source": [
    "#Reasoning for dropping the Unknown column, it is filled with 0 cases\n",
    "c = 0\n",
    "for x in covid[\"Unknown\"] == 0:\n",
    "    c += 1\n",
    "print(\"Number of 0's in Unknown column: \", c)\n",
    "print(\"Number of values counted by len in Unknown Column: \", (len(covid[\"Unknown\"])))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "id": "4f62a628",
   "metadata": {},
   "outputs": [],
   "source": [
    "#This function is used to group the data into Seasons\n",
    "def Season_Grouping(Month):\n",
    "    Fall = [9, 10, 11]\n",
    "    Summer = [6, 7, 8]\n",
    "    Winter = [12, 1, 2]\n",
    "    Spring = [3, 4, 5]\n",
    "    if Month in Fall:\n",
    "        return \"Fall\"\n",
    "    elif Month in Summer:\n",
    "        return \"Summer\"\n",
    "    elif Month in Winter:\n",
    "        return \"Winter\"\n",
    "    else:\n",
    "        return \"Spring\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 11,
   "id": "214d5196",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "4     111\n",
       "3     110\n",
       "5      93\n",
       "7      93\n",
       "8      93\n",
       "10     93\n",
       "12     93\n",
       "1      93\n",
       "6      90\n",
       "9      90\n",
       "11     90\n",
       "2      84\n",
       "Name: DATE, dtype: int64"
      ]
     },
     "execution_count": 11,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "#Creating a copy of the Date column to create a new column for seasons\n",
    "datecopy = covid.index.copy()\n",
    "datecopy = pd.Series(datecopy)\n",
    "months = datecopy.dt.month\n",
    "months.value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "id": "cf4382fb",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "DATE\n",
       "2020-03-15 06:00:00    Spring\n",
       "2020-03-16 06:00:00    Spring\n",
       "2020-03-17 06:00:00    Spring\n",
       "2020-03-18 06:00:00    Spring\n",
       "2020-03-19 06:00:00    Spring\n",
       "                        ...  \n",
       "2023-04-17 06:00:00    Spring\n",
       "2023-04-18 06:00:00    Spring\n",
       "2023-04-19 06:00:00    Spring\n",
       "2023-04-20 06:00:00    Spring\n",
       "2023-04-21 06:00:00    Spring\n",
       "Name: Seasons, Length: 1133, dtype: object"
      ]
     },
     "execution_count": 12,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "#Now we will append this to the covid dataset\n",
    "Seasons = months.apply(Season_Grouping)\n",
    "covid[\"Seasons\"] = Seasons.values\n",
    "covid[\"Seasons\"]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "5d178930",
   "metadata": {},
   "outputs": [],
   "source": [
    "covid.info()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b8de298c",
   "metadata": {},
   "outputs": [],
   "source": [
    "covid.nunique()"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "63a5e594",
   "metadata": {},
   "source": [
    "<h1><u> Cleaning the Data "
   ]
  },
  {
   "cell_type": "markdown",
   "id": "f4d2615c",
   "metadata": {},
   "source": [
    "<h2> Updating Column Names"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "id": "de428800",
   "metadata": {},
   "outputs": [],
   "source": [
    "#Cleaning up the County Names\n",
    "covid.columns = covid.columns.str.replace(\"_\",\" \")\\\n",
    ".str.replace(\"St Marys\",\"St. Mary's\")\\\n",
    ".str.replace(\"Baltimore\",\"Baltimore County\")\\\n",
    ".str.replace(\"Baltimore County City\",\"Baltimore City\")\\\n",
    ".str.replace(\"Queen Annes\", \"Queen Anne's\")\\\n",
    ".str.replace(\"Prince Georges\", \"Prince George's\")"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "25b878b7",
   "metadata": {},
   "source": [
    "<h2>Melting the Data"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "43daabb4",
   "metadata": {},
   "source": [
    "This is to make the data more machine-readable for when it's exported."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 13,
   "id": "85851e69",
   "metadata": {
    "scrolled": false
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th>Cases</th>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Seasons</th>\n",
       "      <th>County</th>\n",
       "      <th>DATE</th>\n",
       "      <th></th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th rowspan=\"10\" valign=\"top\">Spring</th>\n",
       "      <th rowspan=\"5\" valign=\"top\">Allegany</th>\n",
       "      <th>2020-03-15 06:00:00</th>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-03-31 06:00:00</th>\n",
       "      <td>17110</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-01 06:00:00</th>\n",
       "      <td>17110</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-02 06:00:00</th>\n",
       "      <td>17112</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-03 06:00:00</th>\n",
       "      <td>17113</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th rowspan=\"4\" valign=\"top\">Worcester</th>\n",
       "      <th>2022-04-09 06:00:00</th>\n",
       "      <td>8640</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-10 06:00:00</th>\n",
       "      <td>8641</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-11 06:00:00</th>\n",
       "      <td>8643</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2022-04-05 06:00:00</th>\n",
       "      <td>8631</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Fall</th>\n",
       "      <th>Worcester</th>\n",
       "      <th>2021-10-01 06:00:00</th>\n",
       "      <td>4680</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>28325 rows × 1 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "                                       Cases\n",
       "Seasons County    DATE                      \n",
       "Spring  Allegany  2020-03-15 06:00:00      0\n",
       "                  2022-03-31 06:00:00  17110\n",
       "                  2022-04-01 06:00:00  17110\n",
       "                  2022-04-02 06:00:00  17112\n",
       "                  2022-04-03 06:00:00  17113\n",
       "...                                      ...\n",
       "        Worcester 2022-04-09 06:00:00   8640\n",
       "                  2022-04-10 06:00:00   8641\n",
       "                  2022-04-11 06:00:00   8643\n",
       "                  2022-04-05 06:00:00   8631\n",
       "Fall    Worcester 2021-10-01 06:00:00   4680\n",
       "\n",
       "[28325 rows x 1 columns]"
      ]
     },
     "execution_count": 13,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "covid_19 = pd.melt(frame = covid,id_vars = \"Seasons\", var_name = \"County\", value_name = \"Cases\", ignore_index = False)\n",
    "covid_19.sort_values(by = \"County\", inplace = True)\n",
    "covid_19.reset_index(inplace = True)\n",
    "covid_19.set_index(keys = ([\"Seasons\",\"County\", \"DATE\"]), inplace = True)\n",
    "covid_19"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "b6121b94",
   "metadata": {},
   "source": [
    "<h1><i><u> Grouping the data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "id": "1d10b9f7",
   "metadata": {
    "scrolled": true
   },
   "outputs": [],
   "source": [
    "county = covid_19.groupby(by = [\"County\"])\n",
    "countystats = county.agg([\"sum\",\n",
    "           \"mean\",\n",
    "            \"std\",\n",
    "            \"min\",\n",
    "            \"max\"\n",
    "           ])\n",
    "dates = covid_19.groupby(by = [\"DATE\"])\n",
    "datestats = dates.agg([\"sum\",\n",
    "           \"mean\",\n",
    "            \"std\",\n",
    "            \"min\",\n",
    "            \"max\"\n",
    "           ])\n",
    "county_by_date = covid_19.groupby(by = [\"DATE\",\"County\"])\n",
    "countydatestats = county_by_date.agg([\"max\"])\n",
    "\n",
    "season = covid_19.groupby(by = [\"Seasons\"])\n",
    "seasonstats = season.agg([\"sum\",\n",
    "           \"mean\",\n",
    "            \"std\",\n",
    "            \"min\",\n",
    "            \"max\"\n",
    "           ])"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "aa1a36ba",
   "metadata": {},
   "source": [
    "<h3><u> Stats for Cases by County "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 15,
   "id": "e0bb8dc1",
   "metadata": {
    "collapsed": true
   },
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead tr th {\n",
       "        text-align: left;\n",
       "    }\n",
       "\n",
       "    .dataframe thead tr:last-of-type th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr>\n",
       "      <th></th>\n",
       "      <th colspan=\"5\" halign=\"left\">Cases</th>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th></th>\n",
       "      <th>sum</th>\n",
       "      <th>mean</th>\n",
       "      <th>std</th>\n",
       "      <th>min</th>\n",
       "      <th>max</th>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>County</th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "      <th></th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>Allegany</th>\n",
       "      <td>12152692</td>\n",
       "      <td>10726.118</td>\n",
       "      <td>7775.773</td>\n",
       "      <td>0</td>\n",
       "      <td>21932</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Anne Arundel</th>\n",
       "      <td>68141269</td>\n",
       "      <td>60142.338</td>\n",
       "      <td>41118.462</td>\n",
       "      <td>1</td>\n",
       "      <td>120886</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Baltimore City</th>\n",
       "      <td>84537180</td>\n",
       "      <td>74613.575</td>\n",
       "      <td>51050.214</td>\n",
       "      <td>1</td>\n",
       "      <td>150638</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Baltimore County</th>\n",
       "      <td>99706117</td>\n",
       "      <td>88001.868</td>\n",
       "      <td>58670.428</td>\n",
       "      <td>3</td>\n",
       "      <td>173725</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Calvert</th>\n",
       "      <td>7976883</td>\n",
       "      <td>7040.497</td>\n",
       "      <td>5277.638</td>\n",
       "      <td>0</td>\n",
       "      <td>14918</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Caroline</th>\n",
       "      <td>4204423</td>\n",
       "      <td>3710.876</td>\n",
       "      <td>2635.696</td>\n",
       "      <td>0</td>\n",
       "      <td>7382</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Carroll</th>\n",
       "      <td>15695146</td>\n",
       "      <td>13852.733</td>\n",
       "      <td>9844.837</td>\n",
       "      <td>1</td>\n",
       "      <td>28429</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Cecil</th>\n",
       "      <td>11144022</td>\n",
       "      <td>9835.853</td>\n",
       "      <td>7237.551</td>\n",
       "      <td>0</td>\n",
       "      <td>20554</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Charles</th>\n",
       "      <td>20565172</td>\n",
       "      <td>18151.079</td>\n",
       "      <td>13604.962</td>\n",
       "      <td>1</td>\n",
       "      <td>39026</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Dorchester</th>\n",
       "      <td>5316147</td>\n",
       "      <td>4692.098</td>\n",
       "      <td>3494.334</td>\n",
       "      <td>0</td>\n",
       "      <td>9637</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Frederick</th>\n",
       "      <td>33035686</td>\n",
       "      <td>29157.711</td>\n",
       "      <td>20621.919</td>\n",
       "      <td>0</td>\n",
       "      <td>59008</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Garrett</th>\n",
       "      <td>3933036</td>\n",
       "      <td>3471.347</td>\n",
       "      <td>2637.300</td>\n",
       "      <td>0</td>\n",
       "      <td>7354</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Harford</th>\n",
       "      <td>27663799</td>\n",
       "      <td>24416.416</td>\n",
       "      <td>17754.947</td>\n",
       "      <td>2</td>\n",
       "      <td>50617</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Howard</th>\n",
       "      <td>33881839</td>\n",
       "      <td>29904.536</td>\n",
       "      <td>22035.553</td>\n",
       "      <td>0</td>\n",
       "      <td>64792</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Kent</th>\n",
       "      <td>2242585</td>\n",
       "      <td>1979.334</td>\n",
       "      <td>1385.668</td>\n",
       "      <td>0</td>\n",
       "      <td>3980</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Montgomery</th>\n",
       "      <td>130337876</td>\n",
       "      <td>115037.843</td>\n",
       "      <td>84183.474</td>\n",
       "      <td>10</td>\n",
       "      <td>247919</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Prince George's</th>\n",
       "      <td>132556005</td>\n",
       "      <td>116995.591</td>\n",
       "      <td>75393.057</td>\n",
       "      <td>9</td>\n",
       "      <td>230971</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Queen Anne's</th>\n",
       "      <td>5058001</td>\n",
       "      <td>4464.255</td>\n",
       "      <td>3162.062</td>\n",
       "      <td>0</td>\n",
       "      <td>8922</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Somerset</th>\n",
       "      <td>3773911</td>\n",
       "      <td>3330.901</td>\n",
       "      <td>2202.473</td>\n",
       "      <td>0</td>\n",
       "      <td>6221</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>St. Mary's</th>\n",
       "      <td>13043363</td>\n",
       "      <td>11512.236</td>\n",
       "      <td>9014.022</td>\n",
       "      <td>0</td>\n",
       "      <td>24769</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Talbot</th>\n",
       "      <td>3959848</td>\n",
       "      <td>3495.011</td>\n",
       "      <td>2581.037</td>\n",
       "      <td>0</td>\n",
       "      <td>7303</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Unknown</th>\n",
       "      <td>0</td>\n",
       "      <td>0.000</td>\n",
       "      <td>0.000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Washington</th>\n",
       "      <td>24118139</td>\n",
       "      <td>21286.972</td>\n",
       "      <td>15195.964</td>\n",
       "      <td>0</td>\n",
       "      <td>41184</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Wicomico</th>\n",
       "      <td>14025643</td>\n",
       "      <td>12379.208</td>\n",
       "      <td>8796.824</td>\n",
       "      <td>0</td>\n",
       "      <td>25083</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>Worcester</th>\n",
       "      <td>6252111</td>\n",
       "      <td>5518.192</td>\n",
       "      <td>3830.434</td>\n",
       "      <td>0</td>\n",
       "      <td>10995</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "                      Cases                                   \n",
       "                        sum        mean        std min     max\n",
       "County                                                        \n",
       "Allegany           12152692   10726.118   7775.773   0   21932\n",
       "Anne Arundel       68141269   60142.338  41118.462   1  120886\n",
       "Baltimore City     84537180   74613.575  51050.214   1  150638\n",
       "Baltimore County   99706117   88001.868  58670.428   3  173725\n",
       "Calvert             7976883    7040.497   5277.638   0   14918\n",
       "Caroline            4204423    3710.876   2635.696   0    7382\n",
       "Carroll            15695146   13852.733   9844.837   1   28429\n",
       "Cecil              11144022    9835.853   7237.551   0   20554\n",
       "Charles            20565172   18151.079  13604.962   1   39026\n",
       "Dorchester          5316147    4692.098   3494.334   0    9637\n",
       "Frederick          33035686   29157.711  20621.919   0   59008\n",
       "Garrett             3933036    3471.347   2637.300   0    7354\n",
       "Harford            27663799   24416.416  17754.947   2   50617\n",
       "Howard             33881839   29904.536  22035.553   0   64792\n",
       "Kent                2242585    1979.334   1385.668   0    3980\n",
       "Montgomery        130337876  115037.843  84183.474  10  247919\n",
       "Prince George's   132556005  116995.591  75393.057   9  230971\n",
       "Queen Anne's        5058001    4464.255   3162.062   0    8922\n",
       "Somerset            3773911    3330.901   2202.473   0    6221\n",
       "St. Mary's         13043363   11512.236   9014.022   0   24769\n",
       "Talbot              3959848    3495.011   2581.037   0    7303\n",
       "Unknown                   0       0.000      0.000   0       0\n",
       "Washington         24118139   21286.972  15195.964   0   41184\n",
       "Wicomico           14025643   12379.208   8796.824   0   25083\n",
       "Worcester           6252111    5518.192   3830.434   0   10995"
      ]
     },
     "execution_count": 15,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "countystats "
   ]
  },
  {
   "cell_type": "markdown",
   "id": "a6ece287",
   "metadata": {},
   "source": [
    "<h3><u> Stats for Cases by Date"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "27a553f7",
   "metadata": {
    "scrolled": false
   },
   "outputs": [],
   "source": [
    "datestats "
   ]
  },
  {
   "cell_type": "markdown",
   "id": "62c7826f",
   "metadata": {},
   "source": [
    "<h3><u> Stats for Cases by Season "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "605d2b9b",
   "metadata": {
    "scrolled": true
   },
   "outputs": [],
   "source": [
    "seasonstats"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "bbe3da56",
   "metadata": {},
   "source": [
    "<h3><u>States for County by Date"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b008bf54",
   "metadata": {},
   "outputs": [],
   "source": [
    "countydatestats"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "29440284",
   "metadata": {},
   "source": [
    "<I><h1><u>Visualization"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 16,
   "id": "05953347",
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:title={'center':'Max Cases by Date'}, xlabel='DATE'>"
      ]
     },
     "execution_count": 16,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "iVBORw0KGgoAAAANSUhEUgAAAf0AAAG8CAYAAADUyHxBAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAAsTAAALEwEAmpwYAABjG0lEQVR4nO3dd3wUdf7H8ddm03sISSAEQjGEIoKAVJEqiChNNKhnQREROQWloyh3KCIWLDQRPPtJU0FR7pCiIhD1wKBgCAKhCAkJpPfd+f3BLwtLAgRM2+z7+Xjw0Mx8d/e9O5P95Dvzne+Y0tLSDERERKTGc6nqACIiIlI5VPRFRESchIq+iIiIk1DRFxERcRIq+iIiIk5CRV9ERMRJqOiLiMMZMGAAgYGBJCYmVnUUEYeioi9OJTAw0PZv//79F2w3ePBgW7tly5ZVYsKy2b9/P1OmTKFr1640aNCAkJAQoqKiGDJkCG+99RYZGRlVHbHGmj17tt1+FBQUREREBFdffTW33XYbL774IocOHSq319MfOFKeXKs6gEhlc3V1paioiPfee49//OMfJdYfOnSILVu22NpVNy+//DLPPfccVquVdu3aERMTg7+/PykpKWzbto1JkybxwgsvcODAgaqOWqN17dqV66+/HoDc3FySk5P56aef+Oabb5gzZw5jx47lmWeewcVFfSupPlT0xenUqlWLyMhIPv74Y55++mnc3Nzs1r///vsYhsFNN93EF198UUUpSzdv3jz++c9/Uq9ePZYtW0bHjh1LtNm6dSuTJk2qgnTO5frrr2fq1Kkllm/atImxY8fy2muvkZOTw9y5c6sgnUjp9CeoOKV7772XkydPsm7dOrvlRUVFfPjhh7Rr146WLVuW+thdu3YxadIkunTpQmRkJGFhYbRt25Zp06Zx+vRpu7bp6em0adOGkJAQfvrppxLPNXz4cAIDA1mwYMElMx8+fJjnnnsONzc3/v3vf5da8OFMD3Tjxo12y7744gseeugh2rZtS3h4OPXq1eOGG25gwYIFWCyWEs+RlJTE9OnTad++PeHh4dSvX5+2bdsycuRIdu/eXepn8sADD9CsWTNCQkKIjo5m1KhRpR5tuNznvhjDMHjzzTe57rrrCAsLo2XLlkyfPp3MzExbm6KiIpo1a0b9+vXJysoq9XlmzZpFYGAg77zzzmW9fml69uzJqlWrcHd35+233y7xni5nWwQGBrJ161YAWrdubTul0KpVK7t26enpPPfcc3Tu3Jm6desSERHBTTfdxGefffaX34/ULCr64pSGDh2Kn58f7733nt3y9evXc+LECe67774LPvbdd9/l008/pWnTpvztb39jxIgRhIaGsmDBAvr27WtXcAICAnjnnXcwmUyMGDGCtLQ027o333yTr7/+mv79+zNmzJhLZv7www8pLCzklltuKfGlfz4PDw+7n2fOnElcXBzt27dn1KhR3HHHHWRlZTFt2jQefvhhu7Y5OTn07duX+fPnU69ePR544AHuu+8+WrduzebNm9m5c6dd++XLl9OnTx++/vprunbtyiOPPMJ1113HqlWr6NGjB3FxcVf83JcydepUXnrpJa6//npGjx5NQEAA8+fPZ/DgweTn5wNnTufcd999ZGZmsmLFihLPUVRUxAcffICfnx+33377Zb3+hTRr1ozBgwdjGAYrV660W3c522Ly5MnUr18fgNGjRzN58mQmT57MI488Ymvz559/0qtXL+bOnUtgYCD3338/t912G4mJidx///3Mnj27XN6T1Aw6vC9OycfHh2HDhvHuu+9y+PBhGjRoAMB7772Hr68vQ4cO5Y033ij1sePHj+ell17CbDbbLX/nnXcYP348b7/9NuPHj7ctv/baa3n22WeZNm0ajz76KB9++CE///wzM2fOJCIioky9fIBt27YBZ3qSl2v58uU0atTIbpnVamX06NEsX76chx9+mOuuuw6AzZs3k5iYyMMPP8ycOXPsHmOxWOz+qDlw4AB///vfiYiIYN26dYSHh9vWfffddwwePJixY8fy7bffXvZzl8WOHTv47rvvbIVxxowZ3HPPPaxbt4758+fzxBNPAHD//ffz8ssvs2zZMkaMGGH3HF9++SUnTpzgwQcfxNfX97Je/2Kuv/56li9fXuIIz+Vsi6lTp/L9999z5MgRHnnkESIjI0u8ziOPPMKBAwd4++23GTZsmG15RkYGt9xyCy+++CIDBgzgmmuuKbf3Jo5LPX1xWvfddx9Wq5X3338fgGPHjrFhwwZuu+22i375N2jQoETBhzOFxd/fv8ShdYAxY8bQv39/vvzyS+bMmcOIESMwDIOlS5cSFBRUprxJSUkAdoW1rM4vMgAuLi62IwznZi4eeObt7V3iMWazmcDAQNvPS5cuJT8/n+eff75Erm7dutG/f3/i4uLYu3fvZT93WYwePdpW8IufY+bMmZhMJj744APb8rp163LLLbewe/fuEkW4+JD++X8M/FV169YFICUlxW755WyLS/ntt9/YsmULAwYMsCv4AP7+/kyZMgXDMEo9wiHOST19cVpt2rThmmuu4cMPP2TKlCm8//77WCyWix7aBygsLOSdd95h9erV7N27l8zMTKxWq2398ePHS33cwoULuf76622HW5999tkLnpcvjWGcuQu2yWQq82OKnTp1itdff53//Oc/JCYmkp2dbbf+3Mxdu3YlIiKCefPmsXPnTvr27UvHjh1p3bo1rq72Xxk7duwA4IcffuCXX34p8bonT54EYN++fTRv3vyynrssunbtWmJZVFQUoaGhHDhwgMzMTPz8/AAYOXIkn332GcuWLaN9+/YAHDx4kC1bttCxY0euvvrqy379sjh/e13OtriU4s8/MzOz1MP4qampwJnPXwRU9MXJ3XfffTz55JOsX7+eDz74gKuvvpq2bdte9DEjRozgiy++oGHDhgwYMICwsDDc3d2BM4W9+Fzy+QIDA7nhhhv46KOP8Pb25v7777+srHXq1GHfvn0cO3bssh6XlpZGz549SUxMpF27dgwfPpygoCDMZjPp6eksWrTILrOfnx///e9/mTNnDuvWrWPz5s3AmfEJf/vb35g+fbqtp37q1CngzPiEiykubJfz3GURGhpa6vKQkBCSkpLsiv71119PixYt+PTTT3n++edtA/cMwyj3Xj6cLd7BwcG2ZZe7LS6l+PPfsmULW7ZsuWC78/+wEOeloi9O7fbbb+fpp59m4sSJHDt2jHHjxl20/c6dO/niiy/o3r07K1eutLvcz2q18vrrr1/wsWvWrOGjjz4iODiY1NRUHn/8cd59990yZ+3cuTPffvstW7Zs4d577y3z495//30SExOZPHlyiUvMYmNjWbRoUYnH1K1bl3nz5vHqq6+yb98+tm7dyrJly5g/fz7p6em2Iu/v7w+c6TGX9TRFWZ+7LJKTk4mKiiqxvPgIQ3HBL/bggw/y5JNP8vHHH/Pggw/y0UcfERQUxODBg8v8mmX1/fffA9jOz8OVbYuLKf78Z82axdixY/9iYnEGOqcvTs3f358hQ4Zw7NgxvLy8Ljl6u/gStJtvvrnE9f0///wzubm5pT7u0KFD/P3vfycgIICNGzfSt29fPv/8c95+++0yZ7377rtxc3NjzZo17Nmz56Jtz+0tFmceOHBgiXbFl4NdiMlkIjo6mgceeICvvvoKDw8Pu7kLigvaDz/8UOb3UdbnLovS8ickJJCcnEzjxo1LFP3iiYz+9a9/sWbNGlJSUrj77rvx9PS87PwX8/vvv/PZZ59hMpnszrVfybYoHj9y7imkYh06dADODvIUuRQVfXF606ZN44MPPmDVqlUEBARctG3xKP/iXlyxkydPMmHChFIfU1hYyIMPPkh6ejpvvPEGkZGRLFy4kPDwcKZPn253SdulXnv69OkUFhZyxx138OOPP5babvv27fTp06dE5u+++86u3S+//MKrr75a4vF79uwpdRrZU6dOUVhYaFcgR40ahbu7O0899VSp540tFovd617Oc5fFokWLOHLkiN3rPfPMMxiGwd13312iva+vLzExMcTHx/PUU0/ZLqUsT1u2bGHYsGEUFBTw0EMP2Y0VuNxtAWdPD5z7Pou1adOGrl27sm7dOt59913buI9z7d+/v9THinPS4X1xevXq1aNevXplatu2bVs6derE2rVr6du3L506dSI5OZkNGzYQFRVlG7F9rmeeeYaff/6Zhx56yNbDCw4O5u233+bWW2/lgQceYPPmzWW6XGzcuHEUFRXx/PPPc+ONN9K+fXvatm2Ln58fqampxMbGsmfPHrvzyMOHD+f1119n2rRpfP/99zRp0oQ//viD9evXc+utt7J69Wq719i8eTPTp0/nuuuuo2nTpoSGhpKUlMS6deuwWq12p0CioqJYsGABjz76KJ07d6ZPnz40adIEi8XCsWPH2LFjB/n5+Rw+fPiyn7ssOnXqRLdu3RgyZAj+/v7897//Zc+ePbRt2/aCh7tHjhzJkiVLOHHiBD169KBJkyaX9ZrFvv/+e9vgufz8fJKSkvjxxx/Zv38/ZrOZxx57jGeffdbuMZe7LeDMJZqffvopjz/+OIMGDcLHx4eAgABGjRoFwNtvv82gQYN4/PHHWbx4Mddddx1BQUH8+eef/P7778TFxfHBBx/YXeUgzsuUlpZW8k9DkRoqMDCQ0NDQMo1mnj17NnPmzOGVV17hgQcesC0/ffo0s2bN4j//+Q/JycnUrVuXoUOHMmHCBNto/OJZ2L766ivuvPNOWrVqxYYNG0pMmvPSSy8xa9Ys7rjjDt56660yv4/9+/fz9ttv8+2333L06FFycnIIDAykRYsWDBgwgLvuusvu0Pbvv//Os88+y08//UROTg5RUVE8+OCDdO/endatW3PnnXeycOFCAOLj43n33XfZtm0bR44cISMjg9DQUFq2bMno0aNLnSfg999/Z/78+WzZsoUTJ07g6elJnTp1aNeuHYMGDeKmm2664ucuzYABA9i6dSu7du1i7dq1tvkWateuzeDBg5k6dWqJQ/vnuvHGG/nxxx959913GTRoUJk/dzi7XxQzmUx4e3sTGBhI06ZN6dSpEzExMTRs2LDUx1/OtoAzh/XnzJnD8uXLOXr0KIWFhdSvX99upr/s7GyWLFnC559/TkJCAoWFhYSGhnLVVVfRr18/28yPIir6IuJUsrOzadGiBV5eXvz6669XdKmgiKPSOX0RcSrLli0jPT2dESNGqOCL01FPX0RqvPT0dN566y1OnDjBBx98QEBAAD/++OMlB26K1DQq+iJS4yUmJtK6dWs8PDxo3bo1c+bM4dprr63qWCKVTkVfRETESeicvoiIiJNQ0RcREXESKvrVTEJCQlVHuCyOlNdRsjpKTlDWiuAoOYs5Ul5HyVqROVX0RUREnISKvoiIiJNQ0RcREXESKvoiIiJOQkVfRETESajoi4iIOAkVfRERESdxyaL/yiuv0LNnT+rXr0+TJk2IiYlhz549dm0eeeQRAgMD7f716dPHrk1+fj4TJ06kcePGhIeHM3z4cI4dO2bXJi0tjVGjRtGgQQMaNGjAqFGjSEtLs2tz5MgRYmJiCA8Pp3HjxkyaNImCggK7Nr/99hs333wzderUoXnz5syZMwfD0GzDIiLi3C5Z9L///nsefPBB1q9fz5o1a3B1dWXw4MGcPn3arl2PHj2Ij4+3/VuxYoXd+qlTp7J27VqWLl3KunXryMzMJCYmBovFYmszcuRI4uLiWLFiBStXriQuLo6HH37Ytt5isRATE0NWVhbr1q1j6dKlrFmzhunTp9vaZGRkMGTIEEJDQ9m4cSMvvPACb7zxBm+++eYVf0giIiI1wSVvJr169Wq7nxcvXkyDBg3Yvn07/fv3ty338PAgLCys1OdIT0/n/fffZ/78+fTs2dP2PK1atWLz5s307t2b+Ph4NmzYwNdff03Hjh0BePXVV+nfvz8JCQlERUWxceNG9u7dy+7du4mIiABg5syZPPbYYzz99NP4+/uzYsUKcnNzWbhwIV5eXrRo0YJ9+/axYMECxo4di8lkurJPSkRExMFdsuifLysrC6vVSmBgoN3ybdu2cdVVVxEQEEDXrl15+umnCQkJAWDXrl0UFhbSq1cvW/uIiAiio6PZsWMHvXv3JjY2Fl9fX1vBB+jUqRM+Pj7s2LGDqKgoYmNjiY6OthV8gN69e5Ofn8+uXbu44YYbiI2NpXPnznh5edm1ee6550hMTKRhw4alvq/qND1jdcpSFo6U11GyOkpOUNaK4Cg5izlS3uqY1TDg/P7oleaMioq66PrLLvpTpkyhVatWdOjQwbasT58+3HrrrURGRnL48GFmzZrFwIED2bx5Mx4eHiQnJ2M2mwkODrZ7rpCQEJKTkwFITk4mODjYriduMpmoXbu2XZviPySKBQcHYzab7dqEh4eXeJ3idRcq+pf6oCpL8VENR+FIeR0lq6PkBGWtCI6Ss5gj5a2qrIZhcCLXysGMIg5lFnEw0/L//y3iYIaFN68PpH+Dsx3Visx5WUV/2rRpbN++na+//hqz2Wxbftttt9n+v2XLlrRp04ZWrVqxfv16Bg4ceMHnMwyjRJG/kjbnLz+/TfEgPh3aFxGRinQqz8Ku1EJ2phSyK7WA/elFHMq0kGu58GDyg5mWC64rb2Uu+lOnTmX16tWsXbv2gr3lYnXr1iU8PJwDBw4AEBoaisViITU1ldq1a9vapaSk0KVLF1ublJQUuyJvGAapqam2nnpoaCg7duywe63U1FQsFotdm+Je/7mvA5Q4SiAiInKlDMPgj4wivj1ewLfH8/npZAFHsy+/gB/KLKqAdKUr03X6kydPZuXKlaxZs4amTZtesn1qairHjx+3Dexr06YNbm5ubNq0ydbm2LFjxMfH287hd+jQgaysLGJjY21tYmNjyc7OtmsTHx9vd6nfpk2b8PDwoE2bNrY227ZtIy8vz65N3bp1iYyMLMvbFRERKVVOkZV1h3MZ+/1pWiw/QfvVyTyxLY3PDuVeUcEHSMyqRj39CRMm8Mknn/DBBx8QGBhIUlISAD4+Pvj6+pKVlcULL7zAwIEDCQsL4/Dhw/zjH/8gJCSEW265BYCAgADuueceZsyYQUhICEFBQUyfPp2WLVvSo0cPAKKjo+nTpw/jx4/ntddewzAMxo8fT79+/WznNnr16kXz5s0ZPXo0s2bN4vTp08yYMYN7770Xf39/AIYNG8acOXMYM2YMEyZMYP/+/cybN49Jkybp8L6IiFy23CKDLw/nsvyPHL49nk/eFdRofzcTDf1caeRvppGfK438XGnoZ6ahnysRPuZLP0E5uWTRf/vttwEYNGiQ3fLJkyczdepUzGYze/bs4d///jfp6emEhYXRrVs33nnnHfz8/Gztn3/+ecxmMyNGjCAvL48bbriBRYsW2Y0NWLJkCZMnT2bo0KEA9O/fnxdffNG23mw288knnzBhwgRuuukmPD09GTZsGLNmzbK1CQgI4NNPP2XChAn07NmTwMBAHn30UcaOHXuFH5GIiDgbwzD4OaWQDxOyWXUwl4yCsk3w5mqCZkFutK3txrXB7rQKdqOxn5kgD5dq0fG8ZNE/f0a883l5eZW4lr80np6ezJ07l7lz516wTVBQEG+99dZFn6d+/fp88sknF23TsmVLvvrqq0tmEhEROVdukcHH+3NYtCeLfemXPtfuZTbRKcydG+p60K2uB61queFhrvrifiGXfcmeiIhITXM4q4g3fs1i+R85pF+iV1/f10z/+p7c3MCTzmEe1brIn09FX0REnJbFavBBQg7TYtPJLrpwsQ/xdOGOJt4Mv8qbq4Ncq8Wh+iuhoi8iIk7HMAy+O1HAU7HpxJ0qLLWNqwn61ffk7ihvbozwxM3FMQv9uVT0RUTEqcQm5zNpezq7Uksv9sEeLtwd5c3oFr6EV+LI+sqgoi8iIk4h3wqTt6exeG92qes9zTCzfQAjon1wd6Dz9JdDRV9ERGq80/lWRsV5sCer9II/tJEXz7b3p4FvzS6LNfvdiYiI0/siMZeJ29M4nlPyUH2/+p6MbelLt7oeVZCs8qnoi4hIjZRZaOWp2HTe3ZdTYl2whwuLbgjixgjPKkhWdVT0RUSkxvl4fw6Td6SVOpNe5zB33u1Zi1CvmjVIryxU9EVEpMYwDIPXf83imZ8ySl1/RxMv5nUJxNu1TPebq3FU9EVEpEY4lWfh0e/T+OpIXol1QR4mXmmWy5C29aogWfWhoi8iIg7NMAy+OJzH5O1p/JljtVvn7gKPtPBlTEtfMo4dqKKE1YeKvoiIOKzUPAvjf0hjTWLJ3r2Pq4mP+wRzw/+PzC/9gL9zUdEXERGHYxgG7yfkMPOnDFLzrSXWtw9x460batHYX2XuXPo0RETEoaTkWZgWm87yP3JLrDMB41r5Mq2tf42YK7+8qeiLiEi1V3yDnA/2ZfPZoVwKSnbuaRPsxutdA7km2L3yAzoIFX0REam2iqwGnx7M5dXdmew5XVRqGw8zTLjGj3HX+Kl3fwkq+iIiUu3kFRl8uD+b13dnkZhluWC7ZoGuvNuzFtGBbpWYznGp6IuISLWRUWBl2e/ZLNiTRXJuKcfw/19DPzMxTbx57GpffNycc6KdK6GiLyIiVe5kroVFe7JY8nt2qVPnAriYYGCkF/c19aZ7uAcuJh3Kv1wq+iIiUiUMw+CHpAKW/Z7Nl4dzybvAUXx3F7jzKm8eu9qPJgEqW3+FPj0REalUuUUGKw7ksHhPFr9dYHAegK+riRHNfBjT0pe63s53c5yKoKIvIiKVYl9aIQv3ZLH6YC7pFziED1DLw4XRLXx4qLkvQR46X1+eVPRFRKTCGIbBl4fzWLI3my3H8y/aNsLHzKMtfbm3qbcG51UQFX0RESl3hmGw/mgec3dl8nNK4QXbuZjg5vqejGrhy/V13DU4r4Kp6IuISLlK+f+b4Kwt5SY4xYI9XLg7ypsHm/kQ6adSVFn0SYuISLkwDIO39mbz/M6MC56z7xDizugWPtza0Euz51UBFX0REfnLjmVbGP/Daf5ztPTz9rc08GTytf60qqWZ86qSir6IiFwxw4AFv2Xxj5/TS73Ovm1tN17tEkhr3QSnWlDRFxGRK7IvrZAJe9359lR6iXX+bibGX+PH2Kt9dRi/GlHRFxGRy2IYBu8n5DBhWxoF1pJlpGOoO0u6B9HAVyWmutEWERGRMjuWbWHc1tP891jJc/f+biZmtg/gnqbeuKp3Xy2p6IuISJnsSikgZkMqSaXc/e6aWm4s6xHEVQEaqFedqeiLiMglfZSQzZPb0sm12F+K5+Fi8FrXWtzRxEsT6zgAFX0REbkgwzB4bmcmL/2SWWJd5zB3xtVLp99V3lWQTK6EJjcWEZFSncixMPQ/qaUW/LEtffmyf20ae1/4xjlS/ainLyIiJaTlWxn0dQrx6fa3vvUym3iuQwAPNPOpomTyV6joi4iInfQCK3d+k1qi4Ae6m1jZtzbtQzTRjqNS0RcREZvMQiu3fJXC7lP2d8brGOrOguuDaBKgsuHItPVERAQ4M2jviR/SShT8zmHufNq3Np6uGp3v6DSQT0REMAyDmT9nsOJArt3y60Lc+Kh3sAp+DaGevoiI8OavWczbnWW3rEWgK5/fVBtvV/UPawptSRERJ7c9KZ9nf86wWxbobuJfPWup4Ncw2poiIk7sRI6FkVtOc+5Ee/7uJj7rV5umgZpSt6ZR0RcRcVLpBVZuXneSo9kWu+VLbqhFm9q6LK8mUtEXEXFSU3akcyDTvuA/2tKXfvU9qyiRVDQVfRERJ/T+vmw+3p9jt6xvhAfPtPOvokRSGVT0RUSczK6UAp7clma3rHmgK+/1DMbdrEvzajIVfRERJ5JdaGXkltMUWM8u8zKbWNK9lq7FdwIq+iIiTuT5nZnsz7CfU/+N6wO5upZG6jsDFX0RESex5lAu83+zn4DnvqbeDGvsXUWJpLKp6IuIOIFDmUX8fetpu2URPmae6xBQRYmkKlyy6L/yyiv07NmT+vXr06RJE2JiYtizZ49dG8MwmD17Ns2aNaNOnToMGDCAvXv32rXJz89n4sSJNG7cmPDwcIYPH86xY8fs2qSlpTFq1CgaNGhAgwYNGDVqFGlpaXZtjhw5QkxMDOHh4TRu3JhJkyZRUFBg1+a3337j5ptvpk6dOjRv3pw5c+ZgGAYiIs7oj/QiBqxLIb3g7PegqwkW3RCEr5v6fs7kklv7+++/58EHH2T9+vWsWbMGV1dXBg8ezOnTZ/9ifO2115g/fz5z5sxh48aNhISEMGTIEDIzM21tpk6dytq1a1m6dCnr1q0jMzOTmJgYLJaz14iOHDmSuLg4VqxYwcqVK4mLi+Phhx+2rbdYLMTExJCVlcW6detYunQpa9asYfr06bY2GRkZDBkyhNDQUDZu3MgLL7zAG2+8wZtvvvmXPywREUdzKLOIAV+d5FiO/fX4z7b35/o6HlWUSqrKJW+4s3r1arufFy9eTIMGDdi+fTv9+/fHMAwWLlzIuHHjGDRoEAALFy4kKiqKlStXMmLECNLT03n//feZP38+PXv2tD1Pq1at2Lx5M7179yY+Pp4NGzbw9ddf07FjRwBeffVV+vfvT0JCAlFRUWzcuJG9e/eye/duIiIiAJg5cyaPPfYYTz/9NP7+/qxYsYLc3FwWLlyIl5cXLVq0YN++fSxYsICxY8diMml0qog4hyKrwcgtpziRa7VbfkcTL8a09K2iVFKVLvsue1lZWVitVgIDAwFITEwkKSmJXr162dp4eXnRpUsXduzYwYgRI9i1axeFhYV2bSIiIoiOjmbHjh307t2b2NhYfH19bQUfoFOnTvj4+LBjxw6ioqKIjY0lOjraVvABevfuTX5+Prt27eKGG24gNjaWzp074+XlZdfmueeeIzExkYYNG5b6vhISEi73o6gw1SlLWThSXkfJ6ig5QVkrQnnlXHLYlZ9O2k+ne2toEU/USeWP/anl8hrgOJ8rOE7WK80ZFRV10fWXXfSnTJlCq1at6NChAwBJSUkAhISE2LULCQnh+PHjACQnJ2M2mwkODi7RJjk52dYmODjYriduMpmoXbu2XZvzXyc4OBiz2WzXJjw8vMTrFK+7UNG/1AdVWYqPajgKR8rrKFkdJScoa0Uor5zrj+Sx9Ih9Yb+pvifv9q6FSzke8XSUzxUcJ2tF5rysoj9t2jS2b9/O119/jdlstlt3/mFzwzAueSj9/DaltS9Lm/OXl5blYo8VEalJEjOLGPXtKbs754V4uvBG18ByLfjieMo8bHPq1KmsWrWKNWvW2PWWw8LCAGw97WIpKSm2HnZoaCgWi4XU1NSLtklJSbEbZW8YBqmpqXZtzn+d1NRULBbLRdukpKQAJY9GiIjUNMm5Fm7/b6rdSH0T8Ob1QYR4mS/8QHEKZSr6kydPZuXKlaxZs4amTZvarYuMjCQsLIxNmzbZluXl5bFt2zbb+fk2bdrg5uZm1+bYsWPEx8fb2nTo0IGsrCxiY2NtbWJjY8nOzrZrEx8fb3ep36ZNm/Dw8KBNmza2Ntu2bSMvL8+uTd26dYmMjCzThyIi4ojS8q0M/jqFfen2M+794zp/3TlPgDIU/QkTJvDRRx/x9ttvExgYSFJSEklJSWRlnZnVyWQy8cgjjzBv3jzWrFnDnj17GDNmDD4+PgwbNgyAgIAA7rnnHmbMmMHmzZv55ZdfePjhh2nZsiU9evQAIDo6mj59+jB+/Hh+/PFHYmNjGT9+PP369bOd2+jVqxfNmzdn9OjR/PLLL2zevJkZM2Zw77334u9/5s5Qw4YNw8vLizFjxrBnzx7WrFnDvHnzGDNmjA7vi0iNNmVHGnvS7Av+rZGejNVIffl/lzyn//bbbwPYLscrNnnyZKZOnQrA448/Tm5uLhMnTiQtLY127dqxevVq/Pz8bO2ff/55zGYzI0aMIC8vjxtuuIFFixbZjQ1YsmQJkydPZujQoQD079+fF1980bbebDbzySefMGHCBG666SY8PT0ZNmwYs2bNsrUJCAjg008/ZcKECfTs2ZPAwEAeffRRxo4deyWfj4iIQ1j+Rw7//iPXblmfeh683b2WOjxiY0pLS9NUddWIo4wuLeZIeR0lq6PkBGWtCFeSc1dKATetO0neOfPvtAh05ZtbQ/Gq4DvnOcrnCo6TtSJzav5FEREHlpJn4W8bT9kVfA8zLOgWVOEFXxyPir6IiIMqsho8sPk0R7Ptp9id1yWINrXdL/AocWYq+iIiDmrmzxl8ezzfbtnDzX248yrdKldKp6IvIuKANv+Zxxu/Ztkt6xLmzizdKlcuQkVfRMQBvfRLpt3Pdb1d+FfPWri56Dy+XJiKvoiIg1l3OJfvTxTYLVvWoxahmnFPLkFFX0TEgaTlW3l8a5rdsm513Okc5lE1gcShqOiLiDiQBXuyOJlntf3saoJ/Xqfz+FI2KvoiIg4iLd/Kot/sB++Nu8ZPl+dJmanoi4g4iPm/ZZFReHYS1SAPE4+30rz6UnYq+iIiDuB0vpXFe+x7+X+/2g8/N32NS9lpbxERcQDn9/JrebjwUHOfKkwkjkhFX0Skmiutl//Y1b7q5ctl0x4jIlLNvROfTeY5vfxgDxdGqpcvV0BFX0SkGrMaBu/GZ9stG3u1L77q5csV0F4jIlKNfXk4j8Sss3fR8zDDfU11Qx25Mir6IiLVlGEYzIuzn2N/SEMvanlqul25Mir6IiLV1PIDufycUmi37LFWflWURmoCFX0RkWrIahi8ct6d9G6q70mLILcqSiQ1gYq+iEg1tP5IHvHpRbafzSZ4TnPsy1+koi8iUs3kWwye/jHDbtmQRl40CXCtokRSU6joi4hUM0/FprM/42wv38SZyXhE/ioVfRGRamRTipklv9tfl39/tDfXBOtOevLXqeiLiFQThzKLeG6/fXGv521mRjudy5fyoaIvIlINfHc8n26fJ5NeZLItM5vgw961CPLQV7WUD40KERGpIoZh8PmhPBbvzWJbUkGJ9VOv9adNbR3Wl/Kjoi8iUsmyCq2sPJDLst+ziTtVWGqbG+t58MQ1Grwn5UtFX0SkAuUVGRzKKuKP9CL2ZxTx3fF8tp4oINdiXPAxj7b0ZUY7f1xMpgu2EbkSKvoiIn+BYRik5ltJzLRwJMvCkewiDmVa+COjiD8yijiaZeHC5d1e+xA3RoRlcvd19So0szgvFX0RkTLKKrSyK7WQzcfy+fV0IYczizicZSGrqKxlvSQT0L+BJ8+08yc60I2EhPTyCyxyHhV9EZELOJ1v5fsT+Xx/PJ/YkwX8klqI9crru50IHzPDm3hzT1NvIv30VSyVQ3uaiMg5DMNgTWIer+3OZGdKYZkPzV+ICajnY6aJvytN/F2JDnSlR7gHTQNcMemcvVQyFX0Rkf+353QhU3eks+V4/mU9zsfVRKSvmfp+rjTwMVPf10zj/y/yjfxc8XRVcZfqQUVfRAR4Y3cmM3/O4FKn5xv7mWlZy41OYR50DHUn0tdMbU8X9drFIajoi4jTW/FHDk//lFHqupZBrtxQ14OudTzoEOpOqJe5ktOJlB8VfRFxaj+fLODvW0+XWN4j3IPZHQJoHuRWBalEKoaKvog4rdQ8C3d9k0qe5ewyNxdY3C2IIY28dMheahwVfRFxWq/vziIp12q37NUugQxt7F1FiUQqlm7dJCJOKd9i8E68/X3r/361L3+L8qmiRCIVT0VfRJzS72mFZBSeHaof6G5i6rV+VZhIpOKp6IuIU/rPkTy7nzuFeeDtqq9Eqdm0h4uI08kutPLGb1l2y9oEa5S+1Hwq+iLidL47kU9GwdlD+z6uJu5tqnP5UvOp6IuI09l0zH6a3Zgm3oT7aNIdqflU9EXE6Wz+077o967nUUVJRCqXir6IOJXjORbi04tsP5tNcH1dFX1xDir6IuJUfkktsPv52tpuBLjrq1Ccg/Z0EXEqe08X2f3cqpZG7YvzUNEXEaeyN63Q7ufmgSr64jxU9EXEqZzf02+mu+iJE1HRFxGnYbEaJKTb9/RbBOm+Y+I8ylT0t27dyvDhw2nevDmBgYF8+OGHdusfeeQRAgMD7f716dPHrk1+fj4TJ06kcePGhIeHM3z4cI4dO2bXJi0tjVGjRtGgQQMaNGjAqFGjSEtLs2tz5MgRYmJiCA8Pp3HjxkyaNImCAvuBOb/99hs333wzderUoXnz5syZMwfDMBAR53Yo02J3G93ani7U9tT1+eI8ylT0s7OzadGiBS+88AJeXl6ltunRowfx8fG2fytWrLBbP3XqVNauXcvSpUtZt24dmZmZxMTEYLGc/Q0cOXIkcXFxrFixgpUrVxIXF8fDDz9sW2+xWIiJiSErK4t169axdOlS1qxZw/Tp021tMjIyGDJkCKGhoWzcuJEXXniBN954gzfffPOyPhgRqXn2nHc+v1mgevniXMq0x/ft25e+ffsCMGbMmFLbeHh4EBYWVuq69PR03n//febPn0/Pnj0BWLx4Ma1atWLz5s307t2b+Ph4NmzYwNdff03Hjh0BePXVV+nfvz8JCQlERUWxceNG9u7dy+7du4mIiABg5syZPPbYYzz99NP4+/uzYsUKcnNzWbhwIV5eXrRo0YJ9+/axYMECxo4di8lkurxPSERqjN9PnzeIT+fzxcmU2zn9bdu2cdVVV9GuXTsee+wxTp48aVu3a9cuCgsL6dWrl21ZREQE0dHR7NixA4DY2Fh8fX1tBR+gU6dO+Pj42LWJjo62FXyA3r17k5+fz65du2xtOnfubHdEonfv3hw/fpzExMTyersi4oAS0u0H8Wnkvjibcjm21adPH2699VYiIyM5fPgws2bNYuDAgWzevBkPDw+Sk5Mxm80EBwfbPS4kJITk5GQAkpOTCQ4OtuuJm0wmateubdcmJCTE7jmCg4Mxm812bcLDw0u8TvG6hg0blvoeEhISrvwDKGfVKUtZOFJeR8nqKDnBsbL+fjILOHsO3z3zBAkJ1qoLdAGO9JmCY+V1lKxXmjMqKuqi68ul6N922222/2/ZsiVt2rShVatWrF+/noEDB17wcYZhlCjyV9Lm/OXntykexHexQ/uX+qAqS/GpDEfhSHkdJauj5ATHy5pc5AacLfJdoyNp5F+9zus70mcKjpXXUbJWZM4KuWSvbt26hIeHc+DAAQBCQ0OxWCykpqbatUtJSbH1wkNDQ0lJSbEbZW8YBqmpqXZtinv0xVJTU7FYLBdtk5KSAlDiKIGIOI88C5zIPVvwXUwQ4auR++JcKqTop6amcvz4cdvAvjZt2uDm5samTZtsbY4dO0Z8fLztHH6HDh3IysoiNjbW1iY2Npbs7Gy7NvHx8XaX+m3atAkPDw/atGlja7Nt2zby8vLs2tStW5fIyMiKeLsi4gCO59sf6avnY8bNRQN7xbmUqehnZWURFxdHXFwcVquVo0ePEhcXx5EjR8jKyuKpp54iNjaWxMREvvvuO4YPH05ISAi33HILAAEBAdxzzz3MmDGDzZs388svv/Dwww/TsmVLevToAUB0dDR9+vRh/Pjx/Pjjj8TGxjJ+/Hj69etnO8zRq1cvmjdvzujRo/nll1/YvHkzM2bM4N5778Xf3x+AYcOG4eXlxZgxY9izZw9r1qxh3rx5jBkzRiP3RZzYn3n2v/+R6uWLEyrTyaydO3dy66232n6ePXs2s2fP5s477+SVV15hz549/Pvf/yY9PZ2wsDC6devGO++8g5+fn+0xzz//PGazmREjRpCXl8cNN9zAokWLMJvP/uItWbKEyZMnM3ToUAD69+/Piy++aFtvNpv55JNPmDBhAjfddBOenp4MGzaMWbNm2doEBATw6aefMmHCBHr27ElgYCCPPvooY8eOvfJPSUQc3rE8+z5OpF/1OpcvUhnKtNd369atxMx451q9evUln8PT05O5c+cyd+7cC7YJCgrirbfeuujz1K9fn08++eSibVq2bMlXX311yUwi4jz+zFdPX0Rz74uIUzh2/uF99fTFCanoi4hTOJpr/3XXWEVfnJCKvojUeFbD4Mh5Pf0m/jq8L85HRV9EarzjOVbyrWeLfoC7iSAPff2J89FeLyI13oEM+zn3m/i76hJecUoq+iJS451f9BtXs6l3RSqLir6I1Hgq+iJnqOiLSI13IPO8oq+R++KkVPRFpMY7nmOx+7mBJuYRJ6WiLyI1XvI5d9cDCPNS0RfnpKIvIjWaYRgk59r39EO89NUnzkl7vojUaJmFBnnn1HxPM/i56XI9cU4q+iJSoyVm2ffyw73NukZfnJaKvojUaLpcT+QsFX0RqdEOnlf0G6noixNT0ReRGu3gedfoN9I1+uLEVPRFpEYreXhfl+uJ81LRF5Ea7Vj2+RPzqKcvzktFX0RqLMMwOHHexDzh3urpi/NS0ReRGiu9wCCnyLD97GU2EeCuy/XEeanoi0iNdf6c+3W8XXSNvjg1FX0RqbFOnFf06+rQvjg5FX0RqbH+PK/oh/uo6ItzU9EXkRrreI79ID719MXZqeiLSI1V8py+ir44NxV9Eamxzi/64d76yhPnpt8AEamxzi/6Orwvzk5FX0RqrCPn31ZXA/nEyanoi0iNlFVoJSXv7EA+s8mgnnr64uRU9EWkRkrMPG8Qn4eB2UUT84hzU9EXkRrpt9OFdj838DIu0FLEeajoi0iNtOe8oh/lY71ASxHnoaIvIjXSvvQiu5+beKvoi6joi0iNlHBe0Y/U4X0RFX0RqXkKrQYHM84v+urpi6joi0iNk5hZRNE5HftQLxd8Xasuj0h1oaIvIjXO+Yf2r/JXxRcBFX0RqYH2n1f0owJU9EVARV9EaqCE887nX6WiLwKo6ItIDXT+4f2mAW5VlESkelHRF5EaR4f3RUqnoi8iNUpavpWT59xox80FGvjqRjsioKIvIjXM/vPO5zf2c8VVN9oRAVT0RaSG2XYi3+7npoE6tC9STEVfRGqU788r+tfX8aiiJCLVj4q+iNQYKXkW1h+1L/odQ92rKI1I9aOiLyI1xpydmXY/u7lAs0BdridSTEVfRGqEQqvBqoO5dsuGN/HG01WD+ESKqeiLSI3w7fF8TuWfvVQvwN3EnE4BVZhIpPpR0RcRh5eUY+EfP2fYLRsY6YW3q77iRM6la1lExGHtSMpnaXw2aw7lkmexXze4kVfVhBKpxlT0RcRhGIbBgQwL3xzL49NDuWxLKii1XfsQN3qG61I9kfOV6djX1q1bGT58OM2bNycwMJAPP/zQbr1hGMyePZtmzZpRp04dBgwYwN69e+3a5OfnM3HiRBo3bkx4eDjDhw/n2LFjdm3S0tIYNWoUDRo0oEGDBowaNYq0tDS7NkeOHCEmJobw8HAaN27MpEmTKCiw/8X/7bffuPnmm6lTpw7Nmzdnzpw5GIZR1s9ERKqR9AIraxNzGf/DadqsTKLd6iQm7Ui/YMFvFujKez2DcTFpAJ/I+cpU9LOzs2nRogUvvPACXl4lD5m99tprzJ8/nzlz5rBx40ZCQkIYMmQImZlnL5+ZOnUqa9euZenSpaxbt47MzExiYmKwWM4ekxs5ciRxcXGsWLGClStXEhcXx8MPP2xbb7FYiImJISsri3Xr1rF06VLWrFnD9OnTbW0yMjIYMmQIoaGhbNy4kRdeeIE33niDN99884o+IBGpXPkWg++O5zPr5wz6fXmSxh8d556Np3gnPofELMsFH1ff18zcTgF8OzCUcB/NtS9SmjId3u/bty99+/YFYMyYMXbrDMNg4cKFjBs3jkGDBgGwcOFCoqKiWLlyJSNGjCA9PZ3333+f+fPn07NnTwAWL15Mq1at2Lx5M7179yY+Pp4NGzbw9ddf07FjRwBeffVV+vfvT0JCAlFRUWzcuJG9e/eye/duIiIiAJg5cyaPPfYYTz/9NP7+/qxYsYLc3FwWLlyIl5cXLVq0YN++fSxYsICxY8di0l//ItWK1TD47XQRm//MY8uf+fyQVEBOUdmPzPUM92Ds1b70DPdQ717kEv7y0NbExESSkpLo1auXbZmXlxddunRhx44dAOzatYvCwkK7NhEREURHR9vaxMbG4uvrayv4AJ06dcLHx8euTXR0tK3gA/Tu3Zv8/Hx27dpla9O5c2e7IxK9e/fm+PHjJCYm/tW3KyLlILPQyid/5DByyyma/vsE3T5P5ukfM9hwLP+SBd/dBXqEe/CP9v5sGxzKp/1q07uepwq+SBn85YF8SUlJAISEhNgtDwkJ4fjx4wAkJydjNpsJDg4u0SY5OdnWJjg42K4nbjKZqF27tl2b818nODgYs9ls1yY8PLzE6xSva9iwYanvIyEhoczvuaJVpyxl4Uh5HSWro+SEy8ualG9iwSE3vkk1k28te5Fu5GWlY5CFToEW2gVY8TTnnFmRAgkpFZO1KjlKzmKOlNdRsl5pzqioqIuuL7fR++cfNjcM45KH0s9vU1r7srQ5f3lpWS72WLj0B1VZik9lOApHyusoWR0lJ5Q96/9OFvCvfdm8ty+nTM9b19uF7nU96B7uyQ11PahXDufoHeVzdZScxRwpr6Nkrcicf7noh4WFAWd60ecedk9JSbH1sENDQ7FYLKSmplK7dm27Nl26dLG1SUlJsSvyhmGQmppq9zzFh/qLpaamYrFY7NoU9/rPfR0oeTRCRCpWXGoBz+3MZP2RvIu283czcX1dD3rU9aBHuAdRAa4afyNSAf7yOf3IyEjCwsLYtGmTbVleXh7btm2znZ9v06YNbm5udm2OHTtGfHy8rU2HDh3IysoiNjbW1iY2Npbs7Gy7NvHx8XaX+m3atAkPDw/atGlja7Nt2zby8vLs2tStW5fIyMi/+nZFpAxO5Fh49PvTdF9z8oIFP8jDxLhWvqy/uTYH7qrLR72DGdXCl6aBbir4IhWkTD39rKwsDhw4AIDVauXo0aPExcURFBRE/fr1eeSRR3j55ZeJioriqquu4qWXXsLHx4dhw4YBEBAQwD333MOMGTMICQkhKCiI6dOn07JlS3r06AFAdHQ0ffr0Yfz48bz22msYhsH48ePp16+f7TBHr169aN68OaNHj2bWrFmcPn2aGTNmcO+99+Lv7w/AsGHDmDNnDmPGjGHChAns37+fefPmMWnSJH2RiFSwjAIrL/+SyVt7s8m1lD4gr46XCyOb+/J4K1/cXPQ7KVKZylT0d+7cya233mr7efbs2cyePZs777yThQsX8vjjj5Obm8vEiRNJS0ujXbt2rF69Gj8/P9tjnn/+ecxmMyNGjCAvL48bbriBRYsWYTafPVe3ZMkSJk+ezNChQwHo378/L774om292Wzmk08+YcKECdx00014enoybNgwZs2aZWsTEBDAp59+yoQJE+jZsyeBgYE8+uijjB079so/JRG5KMMwWHkgl6d+TCcp11pqmw4h7oy/xpcbIzxxVbEXqRKmtLQ0TVVXjTjKQJNijpTXUbI6Sk44k7WodkMmbU/juxOlz5AXHeDKP64LoG+ER5UebXOUz9VRchZzpLyOkrVaD+QTEeeUlm9l7h9urNqaTGlH8ut4uTChtR/3RfvoML5INaGiLyKXxTAM1h/NY8K2dI5mu5VY7+4Cj7Xy44lrfHVrW5FqRkVfRMosLd/KpO1pLD+QW+r6XuEezO0USJMAfbWIVEf6zRSRSzIMg88P5TFlRxonShmoF+lrZlaHAG5p4KmrZESqMRV9Ebmo/emFTNyezqY/80usM2Ew9mo/nmrrj4dZxV6kulPRF5FS5RUZvLo7k1fjMiko5Sq8FkGuTIvM5JZrI0quFJFqSUVfROxYrAaf/JHD8zszOZpd8v71riYYd40fE67x48jBjCpIKCJXSkVfRAA4nFXEmkO5fJSQw560olLbdKvjzkudA4kOLDlqX0SqPxV9ESdgGAYZhQapeVZO5lpIybOSkmflj4wi9p4uZG9aUam9+mKhXi48d10Awxp7aaCeiANT0RdxMKfyLPyRYSExq4jT+VbS8q2kFRikFZz5/9P5VrIKDXItBrlFBnkWg4wCa6nn5S/F3QVGNvdhUmt/Aj10zb2Io1PRF6nGknMtbD2Rz/cnCohLLWB/RhGn8yt+5mwTcHtjL6a39SfST18TIjWFfptFqhHDMPgt04X3f0xn3eE89meUfm69IphNcF2IOwMbejEw0pMIX309iNQ0+q0WqQYKLAafHsrl9d2Z/HbaE8gq99fwMpuo7eVCiOeZf8GeZup6u9A8yI3mgW5cFeCqa+1FajgVfZEqlFtk8NbeLOb/lkXyBW5Jez4PMzTxc6WRvyuhXi4EursQ6HHuf034u7vg5WrC02zCy2zC182Ej5vOyYs4OxV9kSqQV2SwZG8WC/ZkcTznwsXebILWwW50q+NBlzoetAhypZ6PGReNoBeRK6CiL1LJfkktYPS3p9l7gWvhXTC4qYEXwxp5cWN9T/zUQxeRcqKiL1JJCq0GL/2Sycu/ZFJUygB8PzcTw5t4098nhV7XaGpbESl/KvoilWDTsTye+SmDuFOFJda5muCh5j5MauNPkIcLCQknqyChiDgDFX2RCpRTZOWZHzNY8nt2qevvaOzFM+0DqOdjruRkIuKMVPRFKsg3x/J4fGtaqdPbhnq58GrnQAZEelVBMhFxVir6IuXsYEYRc3Zl8O8/cktdP7SRF3M7BRDsqd69iFQuFX2RcnIix8KrcZks/T271IF6Df3MLO4WRMcwj8oPJyKCir7IX5aaZ+H13Vks2ptFfik3qnMxwSMtfJncxg9/d11+JyJVR0Vf5AplFVqZtzuLBb9lkVNa1x5oGuDK/OuDuC7UvZLTiYiUpKIvcpksVoMP9+fw3P8ySLrA1Ln1fc081daf2xp54eqi2fNEpHpQ0Re5DFv+zGf6j+n8Wsr19gB1vV144ho/7onywdNVxV5EqhcVfZEySEgv5OkfM/j6SF6p60O9XHjsal9GRPvoxjYiUm2p6ItcRFq+ldk7My44It/TDGNb+vH4Nb6aI19Eqj0VfZEL2PJnPo98d4o/L3AXvNsbezGjnT/1ffVrJCKOQd9WIucxDIMXf8nkhZ2ZlDYmv2OoO891CKB9iEbki4hjUdEXOUeh1WDy9nSWxZecK7++r5l/tPdncEMvTLqfvYg4IBV9kf+XUWDl3k2n2Pxnvt1yEzCulS+T2/hrRL6IODQVfRGgyGpwXykFP9DdxLs9g+kerqlzRcTxqeiLANNi09l0XsGP8DGz/MZgWgS5VVEqEZHypaIvTu/d+Gze2mt/Dv/a2m4s7xNMiJfuhCciNYcuLBantvtUIZN2pNkti/Ax84kKvojUQCr64rQyC62M2HTK7s54Pq4mPupdi1AVfBGpgVT0xSkZhsHjW9PYn1Fkt/y1roFcE6zr70WkZlLRF6f02aFcVh/MtVt2T5Q3wxp7V1EiEZGKp6IvTiez0Mq02HS7ZS2DXHmxU2DVBBIRqSQq+uJ05uzM5Pg58+m7mmBpj1p4aeIdEanhVPTFqew5XcjCPVl2y8Ze7UuzQF2LLyI1n4q+OJWnf0zHcs5ddCJ8zExs7Vd1gUREKpGKvjiNXzNd+OaY/ax7z3cIwMdNvwYi4hz0bSdOY3Gi/SH8zmHu3BrpWUVpREQqn4q+OIVvjuWxPc1+wp3Jbfx0i1wRcSoq+lLjpRdYeXJbmt2yLmHudK+rO+eJiHNR0Zcab+L2NA5lWuyWPd8hQL18EXE6KvpSo+1KKWD5H/Yz741s5kOb2ppqV0Scj4q+1FhWw2DKDvuZ91oEujLruoAqSiQiUrVU9KXGevrHDLYnF9gt+2eHADw1856IOCkVfamRPjuYy/zf7Gfe61ariN71dImeiDivcin6s2fPJjAw0O5f06ZNbesNw2D27Nk0a9aMOnXqMGDAAPbu3Wv3HPn5+UycOJHGjRsTHh7O8OHDOXbsmF2btLQ0Ro0aRYMGDWjQoAGjRo0iLS3Nrs2RI0eIiYkhPDycxo0bM2nSJAoK7Ht7UrOdyrMwcXua3bJQLxcmNi6smkAiItVEufX0o6KiiI+Pt/374YcfbOtee+015s+fz5w5c9i4cSMhISEMGTKEzMxMW5upU6eydu1ali5dyrp168jMzCQmJgaL5eyo65EjRxIXF8eKFStYuXIlcXFxPPzww7b1FouFmJgYsrKyWLduHUuXLmXNmjVMnz69vN6mVHNWw2D0d6c5mXf2hjpuLrC8TzB1PY2LPFJEpOZzLbcncnUlLCysxHLDMFi4cCHjxo1j0KBBACxcuJCoqChWrlzJiBEjSE9P5/3332f+/Pn07NkTgMWLF9OqVSs2b95M7969iY+PZ8OGDXz99dd07NgRgFdffZX+/fuTkJBAVFQUGzduZO/evezevZuIiAgAZs6cyWOPPcbTTz+Nv79/eb1dqabm/5rFf47aT7X75DV+tKntTsLpKgolIlJNlFtP/9ChQzRv3pxrrrmGBx54gEOHDgGQmJhIUlISvXr1srX18vKiS5cu7NixA4Bdu3ZRWFho1yYiIoLo6Ghbm9jYWHx9fW0FH6BTp074+PjYtYmOjrYVfIDevXuTn5/Prl27yuutSjV1MKOI53Zm2C27LsSNJ67RDXVERKCcevrt27dnwYIFREVFkZKSwty5c+nbty/bt28nKSkJgJCQELvHhISEcPz4cQCSk5Mxm80EBweXaJOcnGxrExwcbDehislkonbt2nZtzn+d4OBgzGazrc2FJCQkXME7rxjVKUtZVIe8VgNGxnmQZzk71W6Aq8GMyAwSD5y9bK86ZC0LR8kJyloRHCVnMUfK6yhZrzRnVFTURdeXS9G/8cYb7X5u3749bdq04aOPPuK6664DKDH7mWEYl5wR7fw2pbUvS5uLLS92qQ+qshSfqnAU1SXvx/tz2J1pf/z++U5BdIvysf1cXbJeiqPkBGWtCI6Ss5gj5XWUrBWZs0Iu2fP19aVZs2YcOHDAdp7//J52SkqKrVceGhqKxWIhNTX1om1SUlIwjLODsQzDIDU11a7N+a+TmpqKxWIpcQRAao7MQivP/mQ/CU+/CA/uusq7ihKJiFRPFVL08/LySEhIICwsjMjISMLCwti0aZPd+m3bttnOz7dp0wY3Nze7NseOHSM+Pt7WpkOHDmRlZREbG2trExsbS3Z2tl2b+Ph4u0v9Nm3ahIeHB23atKmItyrVwEu7MknKPTta38MMczoFam59EZHzlMvh/aeeeoqbbrqJiIgI2zn9nJwc7rzzTkwmE4888ggvv/wyUVFRXHXVVbz00kv4+PgwbNgwAAICArjnnnuYMWMGISEhBAUFMX36dFq2bEmPHj0AiI6Opk+fPowfP57XXnsNwzAYP348/fr1sx0G6dWrF82bN2f06NHMmjWL06dPM2PGDO69916N3K+h9qcXsmCP/SQ8f7/aj4Z+5XZhiohIjVEu34x//vknI0eOJDU1ldq1a9O+fXv++9//0qBBAwAef/xxcnNzmThxImlpabRr147Vq1fj53d2VPXzzz+P2WxmxIgR5OXlccMNN7Bo0SLM5rMDs5YsWcLkyZMZOnQoAP379+fFF1+0rTebzXzyySdMmDCBm266CU9PT4YNG8asWbPK421KNWM1DCbvSKfwbCefet5mxrfyrbpQIiLVmCktLU0zllQjjjLQpFhV5v14fw6PfGc/eG9p9yBua1z6uXxH+WwdJScoa0VwlJzFHCmvo2R1uIF8IhUt32Lw/HnX5HcOc2doI68qSiQiUv2p6ItDmrIjjSNZZ6dodnOBBdcHafCeiMhFqOiLw/kyMZd34nPslt0f7UMjfw3eExG5GBV9cSixyfk89K39efwIHzNT2miqXRGRS1HRF4dxIsdCzIZUcorOjj01AUu6BxHsab7wA0VEBFDRFweRWWjl7m9SOZ1vf7HJ8x0C6BzmUUWpREQci4q+OITxP6Txc0qh3bIJ1/jxSEtdky8iUlYq+lLtLd6TxcoDuXbLutZxZ8q1Oo8vInI5VPSlWlv+Rw6Td9jfTKdlkCv/7hOMq4suzxMRuRwq+lJtrT+SV2LGPW9XE4tvqIWfm3ZdEZHLpW9OqXYMw+Czg7nctykVyznj9txc4P1etbi6llvVhRMRcWCazUSqlV9PFTI9Np0tx/PtlpuAxd2C6F3Ps2qCiYjUACr6Ui2czLXwz/9l8EFCDtZSbgH1cudAhl7gRjoiIlI2KvpSpQ5lFrHgtyze25dNnqXkerMJXuwUwAPNfCo/nIhIDaOiL5UuLd/K6oO5vJ+Qzc7zrr0/V/e6HjzXIUDn8EVEyomKvlQKi9Vgy/F8PkzI4YvDueSX0qsvFhXgyj+v86dfhKfumiciUo5U9KVC7U8v5KP9Ofx7fw5/5lgv2ra2pwuPX+3L6Ja+uOkafBGRcqeiL+VuX1ohG47l8/mhXHYkF1y0rQnoFObOnVd5E9PEGw+zir2ISEVR0ZdyYRgGO5ILePPXLL44nHfJ9g18zdx1lTd3XuVNpJ92QxGRyqBvW/lLMovgvX3Z/Cs+m/9dZFAenJlNb1BDL+66ypuuddxx0fl6EZFKpaIvl81qGPyQVMCqAzn8O8GLXGvaRdt3CXPn7ihvBjb00vS5IiJVSEVfyiwxs4j39mXzyR+5HM0uHn5fem/92tpuDGvszc31PWnkr91MRKQ60LexXFRekcGaxFz+vT+HzcfzS50t71x9IzwY1dyX3vU8dLmdiEg1o6IvpSqwGLy7L5uXf8nkRO7FL7UL93bhb019uLm+J21qu1dSQhERuVwq+mInvcDKBwk5LN2bxYHMC8+g42U2MSDSk04eadzXoZGuqxcRcQAq+gKcueTu33/kMuPHdE7mXbhnf3UtN0Y192FIozOD8hISUlXwRUQchIq+8EtqAVN2pLMtqfSJdNxd4L5oH/4W5U3rYB2+FxFxVCr6TuzXU4W8GpfJZ4dysZQyQM9sgvua+jChtR/hPubKDygiIuVKRd/JGIbBt8cLmLc7k81/5lPaYHxPM/z9aj9GRPuo2IuI1CAq+k7AMAx+Tyviy8N5vLsvmyNZFx6gd2M9D+Z0CqSxrq0XEalx9M1eQ53Ot7LhaB7bkwv479E8Dl+k0ANc5e/KzPb+DIj0qqSEIiJS2VT0awjDMPj1dBGfH8xla1I+P58soODil9cD0La2GxNb+9GvvqfmwhcRqeFU9B2c1TDY8mc+s3dmEnvy4rexLeZphj71PBl7tS+dwjwqOKGIiFQXKvoObOuJfJ7clsbvaUWXbOtphm51POgd4cnwJt4EeujGNyIizkZF3wGdzrfy1I/pfJiQc9F2TfzN3BrpRacwd26o64G3qwq9iIgzU9F3MAcyihi8PuWCA/N6hntwRxNvrq/jTn1fbV4RETlLVcGBxKUWELMhleM5JUfoDW3kxcPNfeioc/QiInIBKvoO4pM/cnhs62nyz+vgRwe48mqXQLrUUbEXEZGLU9F3AKsP5DD629MlZs+7rZEXC7sF4W7WpXYiInJpGtlVze05Xcgj35cs+IMaerJABV9ERC6DevrV2PEcC3d9k2p3SN9sgte7BnJ3lE/VBRMREYeknn419We2hdv/m8qhTPuT+JPb+Kngi4jIFVFPvxo6lm3h5nUnSTzvsrxbIz2Z0NqvilKJiIijU0+/mjlVAIPXp5Qo+L3rebCsRy3Njy8iIldMPf1qJC3fytjfPEnItp9Wt0e4B0u718LNRQVfRESunIp+NZFbZHD7f1NIyLY/+HJLA0/+1bMWrir4IiLyF+nwfjXx4q4MfjxZaLesdz0PlvZQwRcRkfKhol8NLPs9m1d3Z9kt6xzmzvu9auGh6/BFRKScqOhXsbf3ZvHEtjS7Zb6uJt7tWUt3xRMRkXKlc/pVJKPAyqTtafz7j1y75WYMXu8aRKiXuYqSiYhITaWiXwV+TC7gke9Osz/DfpS+t6uJf0TlM7SxdxUlExGRmkxFvxKl5Z/p3a84kFtiLn03F1hyQxBNC45WSTYREan5auxJ47fffptrrrmGsLAwunfvzg8//FBlWQosBusO59JzbTLLSyn4zQNd+bxfbQZEelVJPhERcQ41sqe/evVqpkyZwssvv0ynTp14++23uf3229m+fTv169evsNdNyrHwTnw2uUUGORaD1Dwrv6cVsj+9iAJr6Y+5t6k3czoG4uWqUfoiIlKxamTRnz9/PnfddRf33XcfAHPnzuWbb75h2bJlPPPMMxX2uqcLrLywK7NMbVsEuTK7QwDdwz0rLI+IiMi5atzh/YKCAnbt2kWvXr3slvfq1YsdO3ZU6Gt7l7G3fm9TbzbdGqqCLyIilarG9fRTU1OxWCyEhITYLQ8JCSE5OfmCj0tISPjLr326EKD0kfe13a1cH2RlUJ0irvbL4fCBlArNUpkcKa+jZHWUnKCsFcFRchZzpLyOkvVKc0ZFRV10fY0r+sVM592NzjCMEsvOdakPqizyLQYT8jLxdjXh7WrC181EE39XogNcqeVZtuvuExISyiVLZXGkvI6S1VFygrJWBEfJWcyR8jpK1orMWeOKfnBwMGazuUSvPiUlpUTvv7x5mE081da/Ql9DRETkStW4c/ru7u60adOGTZs22S3ftGkTHTt2rKJUIiIiVa/G9fQBHn30UR5++GHatWtHx44dWbZsGSdOnGDEiBFVHU1ERKTK1MiiP3ToUE6dOsXcuXNJSkqiefPmLF++nAYNGlR1NBERkSpTI4s+wMiRIxk5cmRVxxAREak2atw5fRERESmdir6IiIiTUNEXERFxEir6IiIiTkJFX0RExEmo6IuIiDgJFX0REREnYUpLSzOqOoSIiIhUPPX0RUREnISKvoiIiJNQ0RcREXESKvoiIiJOQkVfRETESajoi4iIOAkV/UqWl5dX1RGkCmn7i/YB51bV219Fv5IcOnSIrl278vLLL1d1lEs6evQoX331Fb/99hsWiwUAw6ie0zmkpqaSnJwMgNVqreI0F6btXzEcZfuD9oGK4ij7QHXZ/ir6FcwwDJ544gnat2/PVVddxejRo6s60kU99dRTdOjQgUWLFtG/f38mTZrEoUOHMJlM1e6XftasWbRt25Y33ngDABeX6rc7a/tXHEfY/qB9oCI5wj5Q3bZ/9fuEapADBw7QqFEjfvjhB7755hveffddgoODqzrWBb3//vvs2LGDVatWsWrVKt544w1+//13Hn30UQBMJlMVJzwjLS2NsWPHsmnTJlq0aMHu3bvZunUrUL3+0tf2rxiOsv1B+0BFcZR9oDpufxX9cnbuX8Kurq6Eh4fTsWNHWrduzY4dO5g+fTqvvPIKGzZsIDMzswqTns1a/N+1a9cSGRlJ586dcXV1ZdCgQVxzzTX88MMPvPfee3ZtqyorgJeXF/Xr1+exxx7j2WefJTc3l9WrV1NQUICLi0uV9ka0/Ss2K1Tv7Q/aByo6K1TvfaC6b3/XSn/FGiw3NxcXFxc8PDwAiIiIYMqUKdx3330cPnyY/fv3c+2117J582beeustevTowaJFi6o8q8lkIi0tDcMwqFevHhaLBbPZDIC7uztRUVHMnDmTu+66C1fXyt9lzv9c3d3dGT16NAEBAQD06NGDb775hi+++IKhQ4dWer4L5dT2L/+sxZmq4/YH7QOVkbU4U3XcBxxh+6unX05mzpzJTTfdRExMDIsWLSIjIwMXFxe6detGTEwM2dnZfPTRRyxZsoStW7cyceJEfvzxR5YtW1blWdPS0ggMDCQ6OprNmzczZ84cUlJSmDFjBh9++CGTJk3Czc3N9pd+VWbNyMjAZDLh7+9vO4x333334efnx9q1a0lKSqqSc4/a/pWTtbpu/wtl1T5Q/lmr6z7gKNtfRf8vKigo4L777uOrr77i8ccfJzQ0lKVLlzJy5EgAgoKCeOKJJ5g9ezZXX301bm5uAAwZMoTGjRsTFxdnGx1b1VmnTJlC586dWbFiBe3bt2fDhg188sknDBs2jEaNGpGbm1spOS+W9aGHHgLOnFt0cXHBarUSHh7O4MGDOXToEKtXr7atr4xfem3/ys1a3bb/xbJqH6iYrNVtH3Ck7Q8q+n/ZwYMHiYuLY9asWQwdOpS33nqLV155hW+//ZbXX38dgKZNm9KuXTvbTmoYBrVq1eKPP/7AbDbbDqNVtEOHDpWadevWrcybNw9fX19eeOEFvvjiC7788kt++OEH2rVrR35+PgkJCbZDVpXhQp/rli1beOONN0r8Mt955500bNiQTZs2sWvXLlasWFEpl8Zo+1cMR9n+F8uqfeCvcZR9wJG2P6jo/2W5ubkcOnSIa6+9FjgziKNbt25MmDCBV155hT/++KPEY0wmExs2bCAwMJA77rij0rLm5OSUmvXJJ59k3rx57N+/H4B69erRsmVL2y/Vp59+SsOGDbnlllsqLeulPtcDBw4A2P7Sd3d35+677+bAgQMMHDiQRx99tFK+oLT9K4ajbP+yZNU+cGUcZR9wpO0PKvp/mdlsJjo6muXLl9stHzt2LH5+frzzzjvAmctI9uzZw7fffsv48eN54IEH6N69O+3bt682Wf/1r38BYLFYOHXqFF988QXjxo3jySefpG/fvoSFhVXaIdOLZfX19bV9rhaLBRcXFw4ePMiKFSv4448/uOOOOzh48CB///vfqzSntn/FZK1O2/9SWbUPVEzW6rQPONL2BxX9S7rUDl6/fn2aNGnCtm3bOH78OCaTCYvFgqenJyNHjmTVqlVYrVZcXFz45ZdfmDt3Lvv37+fLL7/kmWeeKdfDOuWV1Ww2Y7VaiY2N5dChQ3z99ddMmjQJk8lUadfpXk5WgHfeeYetW7fy/fff89JLL+Hj41OtclbG9i+vrJWx/ctzX4WK3f76DtB3QHnkrA7fAaCif1EpKSl211GeO+lDUVERAIGBgfTv35/9+/ezatUqANtGDAwMJCAggMOHDwMwcOBAXn/9ddauXUurVq2qZdYjR44AULt2bSZNmsRnn31W7lmLs5U2eOVysh49etT2XM8++yy//vorLVu2rHY5K2P7l1fWytj+aWlpFBQUlMh+uVkrevuXZ9bK2AfKK2tl7AMnT54kJSWF/Px8wH6/rU77QHnlrIztX1Yq+qUoKipi7Nix9OzZk0GDBvHQQw9x6tQpuykeXV1dycvLY9WqVfztb3+jTZs2rF69mi1bttja/Pnnn9SuXZuGDRsC4OPjQ6NGjap11sjISNsyPz+/cs1aWFjIY489Zht9e27G4l/cy8naoEED23OU5/Sb5Z2zIrd/eWet6O0/YcIEhg0bxrBhw3jqqadsPaDCwsLLzlpR278islb0PlCeWSt6Hxg/fjz9+/cnJiaGO+64g9zcXMxms62IVod9oLxzVuT2v1wq+ucpKipizJgxxMfHs3DhQoYOHcru3bu56667iI+Pt7VbtGgRzZs3t/1l9+ijj9KkSRNuu+02xo0bx7hx41iwYAG33XYbUDGzWDlS1p9++okhQ4awfv16Vq9ezffff4/JZLL9AhX/wlZ1VkfJ6WhZN23aRKdOndi7dy9PPPEEzZo1Y+3atUyfPh3AdhmTstbcrJ9//jkdOnRg3759vPLKK9x7770kJiYybdo0ANukP1Wd1VFyXilTWlpa9UhSTRw9epSBAwcyceJE7rzzTgCOHz9O9+7dGTx4MNOmTePLL79k9uzZPPPMM9x22222L1fDMJg3bx4HDx4kKSmJJ554go4dOyorsHDhQnbv3k1MTAzLli1j7969xMbG2rVZunQpr7/+Ok899VSVZXWUnI6UNSMjg6eeegoPDw+ee+453N3dsVgsvPnmm6xdu5ZPP/0UPz8/Za3BWQEmTpxIYGAgkydPthXO0aNHExgYyAsvvADAW2+9xZtvvsnTTz9dZVkdJeeVUtE/T1xcHH379uXbb7+ladOm5Ofn4+HhweLFi1m4cCEvvPAC/fr1Izc3F29vb9vjDMOo9JtROFLWY8eOkZGRQfPmzdmxYwdDhw7l2Wef5aGHHqKgoAB3d3eKiorIz8+3G4BT2VkdJacjZU1LS2PdunW0bNmS1q1b215/zpw5bNiwgfXr1+Pi4qKsNTRr8WsdP34ci8VCREQEAIcPH+aee+5h2LBhtG/fns6dO1dpVkfJ+Vc5ddFfunQphmHQsGFD+vTpA0B2djZdunTh9ttv56mnnqKwsNB2iKxbt25cffXVzJs3r1InqagJWc+VlZXFnDlz+Ne//sXBgwdxdXW1nYNUzpqftaioCFdXV6ZMmcKJEyf417/+VWVfmMpaNVkXL17MlClT6NSpEy4uLvz666889NBDPPHEE3YdFOUsf055Tn/VqlVcddVVLF++nI8//pgHHniAf/zjH8CZwU+DBw9mxYoVJCcn4+bmZpt68pFHHuHLL7+s1HMzjp71n//8J2A/6tXX15e7776boKAgJk+eXGn5HC1nTc1aPLL5f//7H127dlVWJ8zq5+fHl19+ybp16/jyyy95+eWXefPNN0lOTlbOCuZ0RX/lypW8+uqrTJs2jfXr1/PJJ5/w3HPP8eqrr3L69Gn8/Pzo2bMnQUFBzJ49GwBPT0/gzCxVHh4etlmrlPXSWV955RXS0tJKXIvauHFjHn/8cZYtW8ahQ4dwcXHhu+++IyMjQzlreFaTycSRI0c4cOAA119/vW3ZuYNPlbVmZi0uqHfddRddunSxHYVo1aoV+fn5pc5e56w5K4rTFP3iHm9BQQHt2rVj+PDhwJlrUVu3bk1kZCRxcXEAdOrUiTvuuIOPP/6Yzz//3HaNZmxsLNHR0eV+LXBNz7p79+4Sj3N3d+fmm2+mS5cu3HXXXfTs2ZN7772X06dPO3VOZ8m6ceNGwsLCaN68Ob/88gt9+vShf//+nDp1SllrcNYLTUTz5Zdf0qNHDzp37uz0OStajS/6u3btIi0tzfaX2oABA3jllVfszse4u7uTlZVFixYtgDO95XvuuYfRo0czduxYhgwZwv33388rr7zC4MGDK+zuTTU1a7NmzUp9jvT0dLKzs9m7dy/t27cnPj7e7hphZ8rpLFmL98W9e/fSqFEjpk2bRs+ePWnevDl79+6lVq1aylrDsxY7evQohw4d4u9//ztLlizh9ttvx9vbu9y/rxwlZ2VxreoAFeXzzz9n2rRpuLu7U1hYyJ133slDDz1EaGgogN0gp++++47IyEhCQkJso579/Px49tlnufbaa9mzZw8nT57k22+/JSoqCqBcB8c4Q9ZzBxkCbNu2jVGjRhEWFsb//ve/cp+wwlFyOltWk8mE1Wpl3bp1HDlyhK5du/LDDz9c8I8YZa15WQH27dvHu+++y2effUajRo1Yu3YtV111FVB+31eOkrOy1ciiv3PnTp577jnGjh3L9ddfz7Zt25g9ezanTp3i6aefJjAwEDg72vWHH36w9Zzd3d0BbBt+0KBBDBo0SFn/YtbiXyKLxYLZbKZRo0YsW7aM6667zmlzOmNWq9VKTk4OI0aMoHXr1vTq1UtZnSwrQGRkJH379uXWW2+lU6dOTpuzKtSow/vFh1t27txJVlYWd999N61atWLUqFFMnjyZnTt3smTJEuDMbGXFf+X98ssv9OvXD4D9+/dz//3389NPPylrBWQtnjymTp065V6cHCWnM2fdsWMHvr6+jB8/vkIKk7JW/6zbtm3Dw8OD7t27l3shdZScValGFf3iwy2JiYk0atTI7vDLPffcQ+vWrfnvf//L77//DpzZ6Dt37sTT05O2bdsyZcoUunTpQmZmJm3atFFWB8vqKDmVVVmV1blzViWHPry/ceNG1q1bR/369Wnfvr3t2tSOHTuyaNEikpKS8PPzw2q14uPjwy233MKvv/7KN998YzvXtX79evbu3UvHjh2pV68e//nPfypkYytr+Wd1lJzKqqzKqu+A6sIhe/onTpxg+PDhPPzww2RlZbFq1SruuOMONm7ciGEY9O7dm8jISF5//XW7x/Xu3RsXFxcOHDhgW+bm5kZwcDALFixg+/bt5b6xlbX8szpKTmVVVmXVd0B143DT8Obk5PDkk0+Sn5/PjBkzbLcsvPnmmwkJCeHdd9/FarWyfPlyxowZw9q1a+1mpxo5ciRJSUmsXbsWgNTUVIKDg5XVQbI6Sk5lVVZl1XdAdeRwPX1vb2/c3d258847adiwIQUFBQDcdNNNJCQk2C7DGDJkCAMGDGDcuHFs2bIFwzBISkriwIED3H777bbnq8iNrazOm1NZlVVZ9R1QHTlcTx+wu46y+IYSY8eOpbCwkMWLF9uW5eXlMWzYMPbu3cs111zD77//TkREBO+8847tDkrK6nhZHSWnsiqrsjp3zurIIYt+aW699VaGDBnCAw88gGEYWK1WzGYzycnJ/Pbbb+zcuZP69evb/YWnrDUnq6PkVFZlVVbnzlnVHHr0frHExER+//13WrVqBZy5bKOwsBCz2UxoaCihoaH07NmzilOeoazlz1FygrJWFGWtGI6S1VFyVgcOd07/XMUTMWzfvh0vLy/bxCQvvvgiDz74oN0IzaqmrOXPUXKCslYUZa0YjpLVUXJWJw7d0y+eeOHnn39m4MCBbNy4kXHjxpGfn8+CBQto3LhxFSc8S1nLn6PkBGWtKMpaMRwlq6PkrE4c/px+Xl4eXbp04eDBg7i7uzN16lTGjRtX1bFKpazlz1FygrJWFGWtGI6S1VFyVhcO3dOHM7eWbdCgAb169WLWrFl4enpWdaQLUtby5yg5QVkrirJWDEfJ6ig5qwuH7+nD2buMOQJlLX+OkhOUtaIoa8VwlKyOkrM6qBFFX0RERC7NoUfvi4iISNmp6IuIiDgJFX0REREnoaIvIiLiJFT0RUREnISKvoiIiJNQ0ReRUn344YcEBgba/oWFhdGsWTOGDh3KokWLyMzMvOBjb7nlFgIDA3nxxRdtyxITE+2e72L/vvvuu0u2f+qppyrjYxCpURx+Rj4RqVhTpkyhUaNGFBYWkpyczPfff8/UqVOZP38+H3/8MVdffbVd+2PHjvHDDz/QoEEDli9fzqRJkwCoXbs2ixcvtmv78ssvk5GRwcyZM+2WR0dHk5ubC8DQoUPp169fiVzR0dHl+TZFnIKKvohcVO/evW13LwN44okn2LJlC8OHD+fOO+8kNjYWLy8v2/oVK1bg6+vLyy+/zO23387//vc/2rZti4+PDzExMXbP/d5772EYRonlcObIAECrVq1KXS8il0+H90XksnXv3p2JEydy5MgRli9fbrdu+fLl3HzzzfTu3Zu6devyySefVFFKETmfir6IXJHi3vfGjRtty+Li4tizZw+33XYbLi4uDBkyhNWrV1NUVHTFr5OTk0NqamqJf4WFhX/5PYg4GxV9Ebki9erVw9/fn4MHD9qWLV++nFq1atGzZ08Ahg0bxsmTJ9m0adMVv87cuXNp0qRJiX/ffPPNX34PIs5G5/RF5Ir5+vqSlZUFgNVqZdWqVQwcOBBX1zNfLW3btqVx48YsX76cG2+88Ype45577uG2224rsbxVq1ZXHlzESanoi8gVy8rKonbt2gBs2bKF48eP06lTJ9sgPICePXvy8ccfk5WVha+v72W/RuPGjenRo0d5RRZxair6InJFjh07RkZGBo0bNwawDdgbPXp0qe2/+OILhg8fXmn5RKQkFX0RuSLFRb5Xr17k5OTw5ZdfMmjQIG6//fYSbWfNmsXy5ctV9EWqmIq+iFy2LVu2MHfuXCIjI7njjjtYu3YtmZmZPPDAA3Tv3r1E+7i4OF5++WWSkpIICwurgsQiAir6InIJ33zzDQcOHKCoqIiTJ0/y7bffsmnTJurXr8/HH3+Mp6cny5cvx9/fny5dupT6HP379+fFF19k5cqVPProo5f1+rt37y71Wv/w8HC6det2Re9JxFmp6IvIRb3wwgsAuLu7ExQURIsWLZg9ezZ33303fn5+tkvyBg0ahJubW6nP0aZNG+rWrcvy5csvu+ivXr2a1atXl1jer18/FX2Ry2RKS0szqjqEiIiIVDxNziMiIuIkVPRFRESchIq+iIiIk1DRFxERcRIq+iIiIk5CRV9ERMRJqOiLiIg4CRV9ERERJ6GiLyIi4iT+DyGRVIvD5jAOAAAAAElFTkSuQmCC\n",
      "text/plain": [
       "<Figure size 504x504 with 1 Axes>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "datestats.plot(y = (\"Cases\",\"max\"),\n",
    "              legend = False,\n",
    "              title = \"Max Cases by Date\",\n",
    "              figsize = (7,7))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "6fcbf461",
   "metadata": {},
   "source": [
    "<b>The maximum amount of Covid-19 cases in Maryland was around 250K as of April 2023."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "id": "67df1149",
   "metadata": {
    "scrolled": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:title={'center':'Distribution of Total Cases by Seasons'}>"
      ]
     },
     "execution_count": 17,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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ZGQkxowZU+ntPHjwALt27cKePXuwY8cObNu2Df3798f58+dx6NAhrFmzBr/88ku5Q31btmyJEydOVPXhVElWVhZUKpXG6ZVXZWZmAkC560gkEo1TWi9LS0vDpk2b0KpVK60RPx999BHs7e3RokULrFq1SmOisOKm/zVr1kCpVCIrKwvr169HixYtyrxadVZWllbevLw8eHl5wd3dHX369NHoY1VYWIiLFy+iW7duGvfp1q1bqc3aNenV43L//n08efJEI5+pqSlCQ0PV+Z4+fYro6Gi4uLggJCQETk5OaN++PY4ePVrqfiIiInD79m2NqQIKCgq0jpGpqSny8/Nx8eLFErdz9+5dHDhwAGFhYepl7dq1Q3JyMsLDw8EYw/Pnz7Flyxb1qYdis2bNgre3t8acUa+aOHEi3njjDZ2e4ykrKwtbtmzBhAkT1MsqckwKCgogFos1Tr8WnxY8efKkep3yjsmuXbvg6+uLAwcOwNfXV/2cljVzenHul98r0dHRWu+D7t27a7wPQkJCcPz4cdy8eRNA0Qzsx44d0zq2fDp58iQcHR3Vl1cp63m4f/8+jh49+tpTZmzduhU5OTl48803y1wvMzOzxM/T5s2bw8XFBZ07d9a47AVQ+mug+DViUGqi5ad///7lVtr169dn/fr1q/S2i3+d/vXXX4yxolYVKyurUn8tenh4sA0bNmgs++mnn1j9+vUrdP/XdfHiRQaAPXjwoMTbK9ryI5VK1U3YjDE2ePBgZm9vzwoKCtTLKvJrddmyZczd3b3C+aujhWHIkCEsODhY41fnywoKCljbtm1Z3759S91Geno6q1OnDvvggw+0bvv888+ZmZkZA8Bat26t9ctm3rx5LCoqil2+fJktXryYmZmZsfnz52usExkZyZycnJhQKGQcx7GmTZuylJSUUvP8+uuvzMLCQuO4nj59mv3555/s8uXLLDIykg0ePJiZmpqy27dvM8aKTj0AYCdOnNDY1ty5c7V+yZenJo7LqVOnGACtU3Bvvvkm69atG2Os6LQQAGZra8v++OMPdunSJTZjxgwmFApZTExMifsZMWIEa9y4scaygwcPMo7j2IYNG5hcLmeJiYmsffv2DAD7+++/NdZt06YNk0gkDACbMGGCRusmY4xt376dWVpaMpFIxACwrl27apzWPHjwIPP09GRpaWmMsZJ/sa9evZo1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\n",
      "text/plain": [
       "<Figure size 504x504 with 1 Axes>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "seasonstats.sort_values(by = (\"Cases\",\"sum\"), ascending = False)\\\n",
    "                .plot(kind = \"pie\",\n",
    "                 y = (\"Cases\",\"sum\"),\n",
    "                 figsize = (7,7),\n",
    "                 title = \"Distribution of Total Cases by Seasons\",\n",
    "                 fontsize = 20,\n",
    "                 ylabel = \"\",\n",
    "                 table = True,\n",
    "                 legend = False)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "5c5dc4bf",
   "metadata": {},
   "source": [
    "<b> Winter is the season with the highest average Covid-19 cases in Maryland."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 18,
   "id": "5d087b33",
   "metadata": {
    "scrolled": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:title={'center':'Average Cases by County'}, ylabel='County'>"
      ]
     },
     "execution_count": 18,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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5eHDh+zYsYOVK1diaGiYrTWSHTt2RF9fn+3bt3P58uX39n17FtrT0xN484imjPql/f5J6weoHuX0119/pdvn999/z3LMH6Krq6u2hCUjPXr0UD1hIywsjKSkJJktFRojhakQQqPSLuNPmzaNuXPnZvgrbR3p2zefGBoa0rp1ax49esTChQuJiorC29sbJycntfGLFSuGv78/ly5dIiQkJMPHK/3999/ExMRkOWZ7e3sAIiMj1dofPnzIt99+m+E+7dq1Q6lUMmHCBLW/yO/evcvChQvT9dfT06Nfv36qMV++fJmuz6NHj9I9rikzQUFB2NrasmnTJkaNGpXheM+ePWPKlCnMnTsXeHNZ28jIiN9//13tknpSUhIjR47M8E74/fv3q90MlSZtVq9gwYLAx30vWR07K54+fZpupvbMmTNs2bIFhUKR7gkN8ObGNn19fUaPHk1MTAzNmjXL1k1X9vb2jBkzhqSkJNq2bZvpjPOJEyf48ssvVZ/btm2LgYEBS5cuTff79Mcff+Tu3bvUr18fKysrVXvlypUBWLZsmVr/ixcvZvj77WOZm5vzv//9L90/xt7m4ODAV199xW+//cbChQsxMjJS/UNJiJySS/lCCI05duwYMTExlC5d+r2X9dq1a8f48ePZunUrISEhqpugOnTowJIlS5g4cSKg/uzSt02fPp0bN24wbdo01q1bp3pw+P3797l27RqnT5/m+++/p3Tp0lmKu0KFClSrVo1ff/2V+vXrU61aNR48eMCBAwdwcXFRKxDSDBo0iJ07d7J161auX79O3bp1ef78OVu2bMHb25udO3eqLUGAN3dcX758mVWrVrFv3z5q1qyJjY0N//vf/7h58yYnTpygV69e6Wb3MlK8eHG2b99Op06dWLBgAevWrVOtGU1OTub69etERkby7Nkz1c1Wurq69O3bl1mzZuHj40OjRo1ISkoiIiKCx48f4+vrm24Wr2fPnhgYGODt7Y29vT06Ojqqxw85OjrSvHnzj/5esjP2h/j4+LBq1SrOnj1LtWrVuHv3Llu2bEGpVDJnzhwKFy6cbh9LS0uaNGnCli1bgDczgdk1ePBgkpOTmTJlCl999RWVKlWiQoUKmJiY8OjRI06dOsXly5fVCl57e3umTZvG0KFDqVOnDs2bN8fS0pKTJ09y7NgxbGxs0r1goGPHjoSGhvLTTz/x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GjVqZHkEVtGiRXM9HaBWrVqYzWZOnTqVa8xKlSrd91xFRERE/pcK0/tw7do1Tp06xR9//MGePXtISEigdevW1K5dm9jYWHx8fGjVqhX9+/fnxx9/ZO/evURHR+Pi4kKnTp1uO66Pjw/t27enT58+LF68mGPHjvHjjz8yf/78PM+tb9++bN++nf79+1su669atYp+/foBcOzYMd599102b97Mr7/+yvr169m7d6+lYPb09OTq1ausW7eOjIwMLl++jK+vL88//zy9e/e2zGvHjh189NFHLFmyJF9ZioiIiNykS/n34YcffsDf3x9HR0fKlClDQEAAQ4cOpVu3bhQtWhT463L5sGHDeOGFF7h27RqhoaEkJydbrVreyowZM3j//fcZNmwYGRkZVKpU6ZaX5W+nZs2arFixgri4OFq3bk1OTg7e3t6Eh4cDUKJECQ4dOsSrr75KRkYGFSpUoFOnTpbCNTQ0lNdee43u3btz7tw5hg4dyvDhw5k2bRrx8fGMGjWK33//nbJly/LEE0/c9X7YW9HD8UVERORWDJmZmXm7sVFE7II93Jz+oFOGtqEc808Z2oZytA17yFGX8kVERETELqgwFRERERG7oMJUREREROyCClMRERERsQsqTEVERETELqgwFRERERG7oMJUREREROyCHrAv/zjjFGO+9tcD+kVERB5OD/2K6e+//07fvn2pUaMGrq6uBAQE0KdPH06ePFnYU7svQ4YMoVy5csyePbtQ52E0Gjl+/HihzkFEREQeLg91YXrs2DGefvpp9u/fz/Tp09m+fTszZ87kwIEDNG3a9IErrK5du8bChQvp378/c+bMKezpiIiIiNjUQ12YDh48GAcHB7799lvCwsLw8PCgcePGfPvttzg4ODB48GBL3/DwcKvXADExMURFRVlem81mpk6dSu3atXF3d6dBgwYsWLDAap/ff/+d1157DS8vL7y8vHj++ec5fPiwZfvYsWOpX78+X3/9NbVr16ZKlSp06dKFjIyMu57P0qVL8fT0ZODAgRw8eJB9+/ZZbc/L2DfPafr06QQEBODl5UXv3r25fPnyPZ3n/7p+/TpDhgyhevXqVKhQgcDAQN599927no+IiIjI/3poC9Pz58/z/fff8/rrr1OiRAmrbSVKlKB79+589913ZGZm5nnMuLg4Pv/8c+Lj4/npp5/o378//fv3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\n",
      "text/plain": [
       "<Figure size 576x576 with 1 Axes>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "countystats.sort_values(by = (\"Cases\",\"mean\"))\\\n",
    "    .plot(y = (\"Cases\",\"mean\"),\n",
    "          kind = \"barh\",\n",
    "         figsize = (8,8),\n",
    "         legend = False,\n",
    "         title = \"Average Cases by County\",\n",
    "         color = \"g\")"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "7789b52f",
   "metadata": {},
   "source": [
    "<b>From averaging all of the cases per County, Prince George's County comes out on top."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 19,
   "id": "e5a2bee0",
   "metadata": {
    "scrolled": false
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:title={'center':'Box Plot of Cases by Date of Each County'}, ylabel='Cases'>"
      ]
     },
     "execution_count": 19,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "iVBORw0KGgoAAAANSUhEUgAAAhMAAAHNCAYAAACkf/nmAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAAsTAAALEwEAmpwYAABGxUlEQVR4nO3deVRV9f7/8ReiIg6IISCIaCrhWHwdMcsULCVzKhP7WeaUA3kpuyiiOVSWc2mOldhomZJe0dDUxBnBmwOmhpQ3RFQIFBQVRDy/P1yc6xFUcGPA9flYi7V07/fe53OmfV7n8/nsfazS09NNAgAAuEflSroBAACgbCNMAAAAQwgTAADAEMIEAAAwhDABAAAMIUwAAABDCBO4rxISEmRvb6+RI0eWdFOK5I8//tDLL7+sRo0aqUaNGrK3ty/pJpUZ3bp1k729vRISEkq6KQ+85ORkjRw5Us2aNdNDDz1UJp8XXk9lA2GiFLC3t8/35+joqCZNmmjgwIH65ZdfSrqJZjt37szX1po1a8rT01P9+vXT1q1b78vtLl++XPb29po2bdp92f/NcnNz1b9/f/3444/q0KGDxowZo+Dg4EJv//vvv2vcuHFq37693N3d5ejoKA8PD/Xu3VuffvqpLly4cB9b/2CbNm2axWuzRo0acnNzU7NmzfTCCy9o5syZ+vPPP4vt9kr7B11AQIC+++47NW/eXP/85z8VHBys6tWr33Gb5s2bF3hMuvlv0aJFf9M9uD9MJpPWrVunV199Vc2aNVOtWrXk4uKiFi1aaMSIEfr5559LuomF8nceF++mfEk3AP918wdWZmamDh8+rLVr12r9+vVasWKFOnfuXIKts1SnTh39v//3/yRJV65c0eHDh7Vx40Zt3LhRs2bN0muvvVbCLbx3CQkJ+u233+Tr66tPP/20SNvOmTNH77//vq5fv66WLVvK399fdnZ2Sk1NVVRUlMaOHavp06frxIkT96n1kKT27dvriSeekHTj9ZmSkqJ///vf+vnnnzVjxgyNGjVKkydPVrly/7vfp65evarIyEh5eHjou+++K/L2I0aMuG3waN26tdHmlZi//vpLr776qvbs2aOqVauqQ4cOatCggaysrPTnn39q48aNWrFihUaNGqWpU6eWdHPLDMJEKRISEpJv2ccff6xJkybpo48+KlVhwt3dPV97v/rqKwUGBuqdd97Ryy+/LFtb2xJqnTFnzpyRJDk5ORVpu7lz5+q9995T7dq1tWzZMrVt2zZfze7duzV27NhiaSdu74knnijw/RQZGalRo0Zp3rx5unz5smbNmlUCrft7JCcn6/r160V+HecZOXKk6tatW8ytKllXrlxRnz59dOjQIfXs2VMfffSRHnrooXw1y5Yt03/+858SamXZ9L8by/9H+Pr6SpLS0tLyrcvOzta8efPUvn17ubi4yM3NTZ07d9ZXX30lk+m/V0k/cOCAnJyc1KxZM6Wnp1vsIz09Xc2aNZOjo6Ph4ZSXX35ZVapUUWZmpn777be71icnJ2vMmDF67LHH5OTkpIcfflh9+/bVrl27LOpGjhyp119/XZI0Y8YMi+7WnTt3FqptO3bs0IsvvqiHH35YTk5OeuyxxxQcHKy//vrLos7e3l7dunWTJH333Xfm27lbN+LJkyf1/vvvq0KFClqxYkWBQUK68Y351qGg9evX67XXXlOLFi3k6uqq2rVrq0OHDlq0aJFyc3Pz7SM5OVkTJkxQq1at5Orqqjp16qhFixYaOnSoDh8+nK/+4MGDGjx4sBo1aiRHR0d5enpq2LBhBfaOFHXfd2IymbRgwQK1bt1azs7Oatq0qSZMmKCLFy+aa65du6ZGjRqpTp06yszMLHA/U6dOlb29vT7//PMi3X5BOnXqpB9++EEVK1bU0qVL892nojwX9vb22r17tyTpscceM79WmjdvblGXkZGh999/X+3atTO/T7t27ap//etfRW7/oUOH9Oqrr8rDw0OOjo5q2rSpXn/99XxDN82bNze3Y/fu3ea23Y+5S1evXtWnn36qPn36qFmzZnJyclLdunXVo0cP/fTTT7fd7syZMxo/frxat26tWrVqyd3dXU888YTeeecdXbp0qcBtPv/8cz3++ONydnaWh4eHAgMD8x3T7mTRokU6dOiQ2rRpo2XLluULEpJka2ur119/Xe+//77F8sIeb6W7zxUbOXJkvuGxvG26deumtLQ0vfHGG/L09JSTk5O8vb311Vdf5dvHnY6Ln332mezt7TV9+vQC23DhwgW5urqqadOmBR5nioqeiVIu74OnRYsWFstzcnL0wgsvaNeuXWrYsKEGDx6sq1evav369QoMDNSePXu0ZMkSSdL//d//6Z133lFISIgCAgL07bffmvczcuRInTp1SlOnTlXLli0NtdXKyqrQtQkJCfLz89Pp06fVvn17Pf/88zp79qz+9a9/acuWLZo7d64GDBgg6ca4dEZGhiIiIiy6r6UbPSR38/nnn+utt96Sra2tevbsqVq1aik6OlqffPKJfvzxR23YsEF16tSRdGOo6eTJk/ruu+/UrFkzc7C4+TYLsnz5cuXk5Kh37975PkxuZWNjY/H/d955R+XKlTN/gGdkZGj79u0aP3689u/fr6VLl5prL1++rGeeeUYJCQl66qmn1LVrV0lSUlKStm3bpg4dOljc/sqVKxUQEKCKFSvKz89PtWvX1okTJ/TDDz9o48aNWr9+vR599NF72vfdhISEKCoqSr1795adnZ02b96shQsXau/evYqIiJCNjY3Kly+vV199VTNmzNCqVas0aNAgi31cu3ZN33zzjapVq6YXX3yx0Ld9J40aNVKvXr20cuVKhYWFWdynojwXwcHB+vbbb5WYmGgxJHDz0MDp06fVvXt3/fHHH2rXrp0GDhyoy5cva9OmTRo4cKCCg4ML7EEpyMaNGzVgwABdv35d3bt318MPP6wjR45o+fLlWr9+vcLDw/XYY49JuvG+PnnypJYsWWIxJFmU56+wzp8/r3Hjxqlt27bq1KmTatasqbNnzyoiIkL+/v6aO3euBg4caLHNwYMH9cILLygtLU1t2rRR165dlZOTo99//10LFizQwIEDVaVKFYttJk+erK1bt6pr167q1KmTdu7cqa+++kq///67IiIiCtXWL774QpI0ZswYWVtb37H25vdpUY63RmVkZKhLly6qWLGievTooezsbK1du1aBgYEqV66cXn75ZUl3Py56eXnp3Xff1ddff13g/V2xYoUuX76swMDAuz4WhUGYKEVu/vZ76dIlHTlyRNu3b1e7du00efJki9r58+dr165d8vHx0YoVK1SxYkVJ0ttvv62uXbtqxYoV6tq1q3r16iXpxsFl165d+vHHH7Vo0SIFBARo4cKF2rBhg7p06WJOuEZ88803unTpkqpUqaJGjRrdsXb06NE6ffq0xo0bp3HjxpmXjxo1Sp07d9aYMWPk4+MjNzc3Pffcc+Y3ze26r2/n5MmTCg4OVuXKlbVlyxY1btzYvG7q1KmaPXu2/vnPf2rlypWSbnwA7ty50zxprbC3FRUVJenGN9+iWrlypR5++GGLZdevX9eIESO0cuVK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\n",
      "text/plain": [
       "<Figure size 504x504 with 1 Axes>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "countydatestats.plot(y = (\"Cases\"),\n",
    "                     kind = \"box\",\n",
    "                     ylabel = \"Cases\",\n",
    "                     title = \"Box Plot of Cases by Date of Each County\",\n",
    "                     figsize = (7,7)\n",
    "                    )"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 20,
   "id": "c89830b5",
   "metadata": {
    "scrolled": true
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Min: 0.000\n",
      "Q1: 2334.000\n",
      "Median: 7765.000\n",
      "Q3: 25704.000\n",
      "Max: 247919.000\n"
     ]
    }
   ],
   "source": [
    "quartiles = np.percentile(countydatestats, [25, 50, 75])\n",
    "data_max = np.max(countydatestats)\n",
    "data_min = np.min(countydatestats)\n",
    "print('Min: %.3f' % data_min)\n",
    "print('Q1: %.3f' % quartiles[0])\n",
    "print('Median: %.3f' % quartiles[1])\n",
    "print('Q3: %.3f' % quartiles[2])\n",
    "print('Max: %.3f' % data_max)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "5dce2e88",
   "metadata": {},
   "source": [
    "<h1><u><i>Exporting the data for further visualization"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 53,
   "id": "f6b00529",
   "metadata": {},
   "outputs": [],
   "source": [
    "excel_file = pd.ExcelWriter(\"MD_Covid.xlsx\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 54,
   "id": "5b43443d",
   "metadata": {},
   "outputs": [],
   "source": [
    "covid_19.reset_index().to_excel(excel_writer = excel_file, sheet_name = \"Covid-19\") #Reseting the index to make the data machine-readable\n",
    "\n",
    "datestats.to_excel(excel_writer = excel_file, sheet_name = \"datestats\")\n",
    "\n",
    "countystats.to_excel(excel_writer = excel_file, sheet_name = \"countystats\")\n",
    "\n",
    "countydatestats.reset_index().to_excel(excel_writer = excel_file, sheet_name = \"countydatestats\") #Reseting the index to make the data machine-readable\n",
    "\n",
    "seasonstats.to_excel(excel_writer = excel_file, sheet_name = \"seasonstats\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 55,
   "id": "e35b062a",
   "metadata": {},
   "outputs": [],
   "source": [
    "excel_file.save()"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "c6146fe1",
   "metadata": {},
   "source": [
    "Now the Excel File has been made and will be further cleaned before we use Tableau!"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.9.7"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
