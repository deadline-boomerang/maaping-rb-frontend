import React, {useEffect, useRef, useState} from "react";

const App1 = () => {
    const dropdownRef = useRef(null);
    // Field data for the first dropdown
    const fieldsData = {
        "data": {
            "getFields": {
                "edges": [
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d0f",
                            "label": "Street Address",
                            "name": "address",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d12",
                            "label": "Annual Revenue",
                            "name": "annualrevenue",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d15",
                            "label": "Primary Associated Company ID",
                            "name": "associatedcompanyid",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d18",
                            "label": "Associated Company Last Updated",
                            "name": "associatedcompanylastupdated",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d1b",
                            "label": "Became \"Demo Booked\"",
                            "name": "became__demo_booked_",
                            "type": "date",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d1e",
                            "label": "Boomerang Sequenced",
                            "name": "boomerang_sequenced",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d21",
                            "label": "Boomerang Source",
                            "name": "boomerang_source",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d24",
                            "label": "Calendly Custom Answer 1",
                            "name": "calendly_answer_1",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d27",
                            "label": "Calendly Custom Answer 10",
                            "name": "calendly_answer_10",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d2a",
                            "label": "Calendly Custom Answer 2",
                            "name": "calendly_answer_2",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d2d",
                            "label": "Calendly Custom Answer 3",
                            "name": "calendly_answer_3",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d30",
                            "label": "Calendly Custom Answer 4",
                            "name": "calendly_answer_4",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d33",
                            "label": "Calendly Custom Answer 5",
                            "name": "calendly_answer_5",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d36",
                            "label": "Calendly Custom Answer 6",
                            "name": "calendly_answer_6",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d39",
                            "label": "Calendly Custom Answer 7",
                            "name": "calendly_answer_7",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d3c",
                            "label": "Calendly Custom Answer 8",
                            "name": "calendly_answer_8",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d3f",
                            "label": "Calendly Custom Answer 9",
                            "name": "calendly_answer_9",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d42",
                            "label": "calendly_meeting",
                            "name": "calendly_meeting",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d45",
                            "label": "Calendly Custom Question 1",
                            "name": "calendly_question_1",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d48",
                            "label": "Calendly Custom Question 10",
                            "name": "calendly_question_10",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d4b",
                            "label": "Calendly Custom Question 2",
                            "name": "calendly_question_2",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d4e",
                            "label": "Calendly Custom Question 3",
                            "name": "calendly_question_3",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d51",
                            "label": "Calendly Custom Question 4",
                            "name": "calendly_question_4",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d54",
                            "label": "Calendly Custom Question 5",
                            "name": "calendly_question_5",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d57",
                            "label": "Calendly Custom Question 6",
                            "name": "calendly_question_6",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d5a",
                            "label": "Calendly Custom Question 7",
                            "name": "calendly_question_7",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d5d",
                            "label": "Calendly Custom Question 8",
                            "name": "calendly_question_8",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d60",
                            "label": "Calendly Custom Question 9",
                            "name": "calendly_question_9",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d63",
                            "label": "City",
                            "name": "city",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d66",
                            "label": "Close Date",
                            "name": "closedate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d69",
                            "label": "Company Name",
                            "name": "company",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d6c",
                            "label": "Company size",
                            "name": "company_size",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d6f",
                            "label": "Country/Region",
                            "name": "country",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d72",
                            "label": "Create Date",
                            "name": "createdate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d75",
                            "label": "Currently in workflow",
                            "name": "currentlyinworkflow",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d78",
                            "label": "Date of birth",
                            "name": "date_of_birth",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d7b",
                            "label": "Days To Close",
                            "name": "days_to_close",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d7e",
                            "label": "Degree",
                            "name": "degree",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d81",
                            "label": "description",
                            "name": "description",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d84",
                            "label": "Email",
                            "name": "email",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d87",
                            "label": "Date of last meeting booked in meetings tool",
                            "name": "engagements_last_meeting_booked",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d8a",
                            "label": "Campaign of last booking in meetings tool",
                            "name": "engagements_last_meeting_booked_campaign",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d8d",
                            "label": "Medium of last booking in meetings tool",
                            "name": "engagements_last_meeting_booked_medium",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d90",
                            "label": "Source of last booking in meetings tool",
                            "name": "engagements_last_meeting_booked_source",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d93",
                            "label": "Factors - G2 Alternate URL",
                            "name": "factors___g2_alternate_url",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d96",
                            "label": "Factors First Page URL",
                            "name": "factors_first_page_url",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d99",
                            "label": "Fax Number",
                            "name": "fax",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d9c",
                            "label": "Field of study",
                            "name": "field_of_study",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1d9f",
                            "label": "First Conversion Date",
                            "name": "first_conversion_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1da2",
                            "label": "First Conversion",
                            "name": "first_conversion_event_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1da5",
                            "label": "First Deal Created Date",
                            "name": "first_deal_created_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1da8",
                            "label": "First Name",
                            "name": "firstname",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dab",
                            "label": "Follower Count",
                            "name": "followercount",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dae",
                            "label": "Gender",
                            "name": "gender",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1db1",
                            "label": "Graduation date",
                            "name": "graduation_date",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1db4",
                            "label": "Additional email addresses",
                            "name": "hs_additional_emails",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1db7",
                            "label": "All teams",
                            "name": "hs_all_accessible_team_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dba",
                            "label": "Business units",
                            "name": "hs_all_assigned_business_unit_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dbd",
                            "label": "All vids for a contact",
                            "name": "hs_all_contact_vids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dc0",
                            "label": "All owner ids",
                            "name": "hs_all_owner_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dc3",
                            "label": "All team ids",
                            "name": "hs_all_team_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dc6",
                            "label": "Average Pageviews",
                            "name": "hs_analytics_average_page_views",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dc9",
                            "label": "First Referring Site",
                            "name": "hs_analytics_first_referrer",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dcc",
                            "label": "Time First Seen",
                            "name": "hs_analytics_first_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dcf",
                            "label": "First Touch Converting Campaign",
                            "name": "hs_analytics_first_touch_converting_campaign",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dd2",
                            "label": "First Page Seen",
                            "name": "hs_analytics_first_url",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dd5",
                            "label": "Time of First Session",
                            "name": "hs_analytics_first_visit_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dd8",
                            "label": "Last Referring Site",
                            "name": "hs_analytics_last_referrer",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1ddb",
                            "label": "Time Last Seen",
                            "name": "hs_analytics_last_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dde",
                            "label": "Last Touch Converting Campaign",
                            "name": "hs_analytics_last_touch_converting_campaign",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1de1",
                            "label": "Last Page Seen",
                            "name": "hs_analytics_last_url",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1de4",
                            "label": "Time of Last Session",
                            "name": "hs_analytics_last_visit_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1de7",
                            "label": "Number of event completions",
                            "name": "hs_analytics_num_event_completions",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dea",
                            "label": "Number of Pageviews",
                            "name": "hs_analytics_num_page_views",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1ded",
                            "label": "Number of Sessions",
                            "name": "hs_analytics_num_visits",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1df0",
                            "label": "Event Revenue",
                            "name": "hs_analytics_revenue",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1df3",
                            "label": "Original Source",
                            "name": "hs_analytics_source",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1df6",
                            "label": "Original Source Drill-Down 1",
                            "name": "hs_analytics_source_data_1",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1df9",
                            "label": "Original Source Drill-Down 2",
                            "name": "hs_analytics_source_data_2",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dfc",
                            "label": "Associated Target Accounts",
                            "name": "hs_associated_target_accounts",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1dff",
                            "label": "Avatar FileManager key",
                            "name": "hs_avatar_filemanager_key",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e02",
                            "label": "Buying Role",
                            "name": "hs_buying_role",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e05",
                            "label": "All form submissions for a contact",
                            "name": "hs_calculated_form_submissions",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e08",
                            "label": "Merged vids with timestamps of a contact",
                            "name": "hs_calculated_merged_vids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e0b",
                            "label": "Calculated Mobile Number in International Format",
                            "name": "hs_calculated_mobile_number",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e0e",
                            "label": "Calculated Phone Number in International Format",
                            "name": "hs_calculated_phone_number",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e11",
                            "label": "Calculated Phone Number Area Code",
                            "name": "hs_calculated_phone_number_area_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e14",
                            "label": "Calculated Phone Number Country Code",
                            "name": "hs_calculated_phone_number_country_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e17",
                            "label": "Calculated Phone Number Region",
                            "name": "hs_calculated_phone_number_region_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e1a",
                            "label": "Clicked on a LinkedIn Ad",
                            "name": "hs_clicked_linkedin_ad",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e1d",
                            "label": "Enrichment opt out",
                            "name": "hs_contact_enrichment_opt_out",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e20",
                            "label": "Enrichment opt out timestamp",
                            "name": "hs_contact_enrichment_opt_out_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e23",
                            "label": "Member email",
                            "name": "hs_content_membership_email",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e26",
                            "label": "Email Confirmed",
                            "name": "hs_content_membership_email_confirmed",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e29",
                            "label": "Time enrolled in registration follow up emails",
                            "name": "hs_content_membership_follow_up_enqueued_at",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e2c",
                            "label": "Membership Notes",
                            "name": "hs_content_membership_notes",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e2f",
                            "label": "Registered At",
                            "name": "hs_content_membership_registered_at",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e32",
                            "label": "Domain to which registration email was sent",
                            "name": "hs_content_membership_registration_domain_sent_to",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e35",
                            "label": "Time registration email was sent",
                            "name": "hs_content_membership_registration_email_sent_at",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e38",
                            "label": "Status",
                            "name": "hs_content_membership_status",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e3b",
                            "label": "Conversations visitor email",
                            "name": "hs_conversations_visitor_email",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e3e",
                            "label": "Count of unengaged contacts",
                            "name": "hs_count_is_unworked",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e41",
                            "label": "Count of engaged contacts",
                            "name": "hs_count_is_worked",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e44",
                            "label": "Country/Region Code",
                            "name": "hs_country_region_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e47",
                            "label": "Created By Conversations",
                            "name": "hs_created_by_conversations",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e4a",
                            "label": "Created by user ID",
                            "name": "hs_created_by_user_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e4d",
                            "label": "Object create date/time",
                            "name": "hs_createdate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e50",
                            "label": "Currently Enrolled in Prospecting Agent",
                            "name": "hs_currently_enrolled_in_prospecting_agent",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e53",
                            "label": "Ads Consent from Forms",
                            "name": "hs_data_privacy_ads_consent",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e56",
                            "label": "Date entered 'Qualified Reconnect (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_166080836",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e59",
                            "label": "Date entered 'Demo Booked (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_40492685",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e5c",
                            "label": "Date entered 'Not Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_46674785",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e5f",
                            "label": "Date entered 'Customer (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_customer",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e62",
                            "label": "Date entered 'Evangelist (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_evangelist",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e65",
                            "label": "Date entered 'Lead (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_lead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e68",
                            "label": "Date entered 'Marketing Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_marketingqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e6b",
                            "label": "Date entered 'Opportunity (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_opportunity",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e6e",
                            "label": "Date entered 'Lost (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_other",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e71",
                            "label": "Date entered 'Sales Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_salesqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e74",
                            "label": "Date entered 'Subscriber (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_entered_subscriber",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e77",
                            "label": "Date exited 'Qualified Reconnect (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_166080836",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e7a",
                            "label": "Date exited 'Demo Booked (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_40492685",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e7d",
                            "label": "Date exited 'Not Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_46674785",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e80",
                            "label": "Date exited 'Customer (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_customer",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e83",
                            "label": "Date exited 'Evangelist (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_evangelist",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e86",
                            "label": "Date exited 'Lead (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_lead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e89",
                            "label": "Date exited 'Marketing Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_marketingqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e8c",
                            "label": "Date exited 'Opportunity (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_opportunity",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e8f",
                            "label": "Date exited 'Lost (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_other",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e92",
                            "label": "Date exited 'Sales Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_salesqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e95",
                            "label": "Date exited 'Subscriber (Lifecycle Stage Pipeline)'",
                            "name": "hs_date_exited_subscriber",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e98",
                            "label": "Recent Document Revisit Date",
                            "name": "hs_document_last_revisited",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e9b",
                            "label": "Invalid email address",
                            "name": "hs_email_bad_address",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1e9e",
                            "label": "Marketing emails bounced",
                            "name": "hs_email_bounce",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa2ec28638fe35d1ea1",
                            "label": "Marketing emails clicked",
                            "name": "hs_email_click",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ea4",
                            "label": "Email address quarantine reason",
                            "name": "hs_email_customer_quarantined_reason",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ea7",
                            "label": "Marketing emails delivered",
                            "name": "hs_email_delivered",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eaa",
                            "label": "Email Domain",
                            "name": "hs_email_domain",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ead",
                            "label": "First marketing email click date",
                            "name": "hs_email_first_click_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eb0",
                            "label": "First marketing email open date",
                            "name": "hs_email_first_open_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eb3",
                            "label": "First marketing email reply date",
                            "name": "hs_email_first_reply_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eb6",
                            "label": "First marketing email send date",
                            "name": "hs_email_first_send_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eb9",
                            "label": "Email hard bounce reason",
                            "name": "hs_email_hard_bounce_reason",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ebc",
                            "label": "Email hard bounce reason",
                            "name": "hs_email_hard_bounce_reason_enum",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ebf",
                            "label": "Is globally ineligible",
                            "name": "hs_email_is_ineligible",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ec2",
                            "label": "Last marketing email click date",
                            "name": "hs_email_last_click_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ec5",
                            "label": "Last marketing email name",
                            "name": "hs_email_last_email_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ec8",
                            "label": "Last marketing email open date",
                            "name": "hs_email_last_open_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ecb",
                            "label": "Last marketing email reply date",
                            "name": "hs_email_last_reply_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ece",
                            "label": "Last marketing email send date",
                            "name": "hs_email_last_send_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ed1",
                            "label": "Marketing emails opened",
                            "name": "hs_email_open",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ed4",
                            "label": "Unsubscribed from all email",
                            "name": "hs_email_optout",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ed7",
                            "label": "Opted out of email: Marketing Information",
                            "name": "hs_email_optout_17312015",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eda",
                            "label": "Opted out of email: One to One",
                            "name": "hs_email_optout_17312958",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1edd",
                            "label": "Email Address Quarantined",
                            "name": "hs_email_quarantined",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ee0",
                            "label": "Email address automated quarantine reason",
                            "name": "hs_email_quarantined_reason",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ee3",
                            "label": "Email Address Recipient Fatigue Next Available Sending Time",
                            "name": "hs_email_recipient_fatigue_recovery_time",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ee6",
                            "label": "Marketing emails replied",
                            "name": "hs_email_replied",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ee9",
                            "label": "Sends Since Last Engagement",
                            "name": "hs_email_sends_since_last_engagement",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eec",
                            "label": "Marketing email confirmation status",
                            "name": "hs_emailconfirmationstatus",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1eef",
                            "label": "Clicked Facebook ad",
                            "name": "hs_facebook_ad_clicked",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ef2",
                            "label": "Facebook click id",
                            "name": "hs_facebook_click_id",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ef5",
                            "label": "Facebook ID",
                            "name": "hs_facebookid",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ef8",
                            "label": "Last NPS survey comment",
                            "name": "hs_feedback_last_nps_follow_up",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1efb",
                            "label": "Last NPS survey rating",
                            "name": "hs_feedback_last_nps_rating",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1efe",
                            "label": "Last NPS survey date",
                            "name": "hs_feedback_last_survey_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f01",
                            "label": "Should be shown an NPS web survey",
                            "name": "hs_feedback_show_nps_web_survey",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f04",
                            "label": "ID of first engagement",
                            "name": "hs_first_engagement_object_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f07",
                            "label": "First Order Closed Date",
                            "name": "hs_first_order_closed_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f0a",
                            "label": "First outreach date",
                            "name": "hs_first_outreach_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f0d",
                            "label": "First subscription create date",
                            "name": "hs_first_subscription_create_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f10",
                            "label": "Google ad click id",
                            "name": "hs_google_click_id",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f13",
                            "label": "googleplus ID",
                            "name": "hs_googleplusid",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f16",
                            "label": "Contact has an active subscription",
                            "name": "hs_has_active_subscription",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f19",
                            "label": "IP Timezone",
                            "name": "hs_ip_timezone",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f1c",
                            "label": "Is a contact",
                            "name": "hs_is_contact",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f1f",
                            "label": "Contact unworked",
                            "name": "hs_is_unworked",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f22",
                            "label": "Journey Stage",
                            "name": "hs_journey_stage",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f25",
                            "label": "Preferred language",
                            "name": "hs_language",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f28",
                            "label": "last sales activity date old",
                            "name": "hs_last_sales_activity_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f2b",
                            "label": "Last Engagement Date",
                            "name": "hs_last_sales_activity_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f2e",
                            "label": "Last Engagement Type",
                            "name": "hs_last_sales_activity_type",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f31",
                            "label": "Object last modified date/time",
                            "name": "hs_lastmodifieddate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f34",
                            "label": "Latest Disqualified Lead Date",
                            "name": "hs_latest_disqualified_lead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f37",
                            "label": "Latest meeting activity",
                            "name": "hs_latest_meeting_activity",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f3a",
                            "label": "Latest Open Lead Date",
                            "name": "hs_latest_open_lead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f3d",
                            "label": "Latest Qualified Lead Date",
                            "name": "hs_latest_qualified_lead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f40",
                            "label": "Last sequence ended date",
                            "name": "hs_latest_sequence_ended_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f43",
                            "label": "Last sequence enrolled",
                            "name": "hs_latest_sequence_enrolled",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f46",
                            "label": "Last sequence enrolled date",
                            "name": "hs_latest_sequence_enrolled_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f49",
                            "label": "Last sequence finished date",
                            "name": "hs_latest_sequence_finished_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f4c",
                            "label": "Last sequence unenrolled date",
                            "name": "hs_latest_sequence_unenrolled_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f4f",
                            "label": "Latest Source",
                            "name": "hs_latest_source",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f52",
                            "label": "Latest Source Drill-Down 1",
                            "name": "hs_latest_source_data_1",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f55",
                            "label": "Latest Source Drill-Down 2",
                            "name": "hs_latest_source_data_2",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f58",
                            "label": "Latest Source Date",
                            "name": "hs_latest_source_timestamp",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f5b",
                            "label": "Latest subscription create date",
                            "name": "hs_latest_subscription_create_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f5e",
                            "label": "Lead Status",
                            "name": "hs_lead_status",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f61",
                            "label": "Legal basis for processing contact's data",
                            "name": "hs_legal_basis",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f64",
                            "label": "Became a Customer Date",
                            "name": "hs_lifecyclestage_customer_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f67",
                            "label": "Became an Evangelist Date",
                            "name": "hs_lifecyclestage_evangelist_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f6a",
                            "label": "Became a Lead Date",
                            "name": "hs_lifecyclestage_lead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f6d",
                            "label": "Became a Marketing Qualified Lead Date",
                            "name": "hs_lifecyclestage_marketingqualifiedlead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f70",
                            "label": "Became an Opportunity Date",
                            "name": "hs_lifecyclestage_opportunity_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f73",
                            "label": "Became an Other Lifecycle Date",
                            "name": "hs_lifecyclestage_other_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f76",
                            "label": "Became a Sales Qualified Lead Date",
                            "name": "hs_lifecyclestage_salesqualifiedlead_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f79",
                            "label": "Became a Subscriber Date",
                            "name": "hs_lifecyclestage_subscriber_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f7c",
                            "label": "Clicked LinkedIn Ad",
                            "name": "hs_linkedin_ad_clicked",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f7f",
                            "label": "LinkedIn URL",
                            "name": "hs_linkedin_url",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f82",
                            "label": "Linkedin ID",
                            "name": "hs_linkedinid",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f85",
                            "label": "Marketing contact status source name",
                            "name": "hs_marketable_reason_id",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f88",
                            "label": "Marketing contact status source type",
                            "name": "hs_marketable_reason_type",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f8b",
                            "label": "Marketing contact status",
                            "name": "hs_marketable_status",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f8e",
                            "label": "Marketing contact until next update",
                            "name": "hs_marketable_until_renewal",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f91",
                            "label": "Member has accessed private content",
                            "name": "hs_membership_has_accessed_private_content",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f94",
                            "label": "Membership last private content access date",
                            "name": "hs_membership_last_private_content_access_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f97",
                            "label": "Merged Contact IDs",
                            "name": "hs_merged_object_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f9a",
                            "label": "Mobile Sdk Push Tokens",
                            "name": "hs_mobile_sdk_push_tokens",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1f9d",
                            "label": "Last Activity",
                            "name": "hs_notes_last_activity",
                            "type": "object_coordinates",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fa0",
                            "label": "Next Activity",
                            "name": "hs_notes_next_activity",
                            "type": "object_coordinates",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fa3",
                            "label": "Next Activity Type",
                            "name": "hs_notes_next_activity_type",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fa6",
                            "label": "Record ID",
                            "name": "hs_object_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fa9",
                            "label": "Record creation source",
                            "name": "hs_object_source",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fac",
                            "label": "Record source detail 1",
                            "name": "hs_object_source_detail_1",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1faf",
                            "label": "Record source detail 2",
                            "name": "hs_object_source_detail_2",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fb2",
                            "label": "Record source detail 3",
                            "name": "hs_object_source_detail_3",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fb5",
                            "label": "Record creation source ID",
                            "name": "hs_object_source_id",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fb8",
                            "label": "Record source",
                            "name": "hs_object_source_label",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fbb",
                            "label": "Record creation source user ID",
                            "name": "hs_object_source_user_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fbe",
                            "label": "Persona",
                            "name": "hs_persona",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fc1",
                            "label": "Pinned engagement ID",
                            "name": "hs_pinned_engagement_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fc4",
                            "label": "Pipeline",
                            "name": "hs_pipeline",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fc7",
                            "label": "Predictive Lead Score",
                            "name": "hs_predictivecontactscore",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fca",
                            "label": "Likelihood to close tmp",
                            "name": "hs_predictivecontactscore_tmp",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fcd",
                            "label": "Likelihood to close",
                            "name": "hs_predictivecontactscore_v2",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fd0",
                            "label": "Lead Rating",
                            "name": "hs_predictivecontactscorebucket",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fd3",
                            "label": "Contact priority",
                            "name": "hs_predictivescoringtier",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fd6",
                            "label": "Contact priority tmp",
                            "name": "hs_predictivescoringtier_tmp",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fd9",
                            "label": "Prospecting Agent Actively Enrolled Count",
                            "name": "hs_prospecting_agent_actively_enrolled_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fdc",
                            "label": "Quarantined Emails",
                            "name": "hs_quarantined_emails",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fdf",
                            "label": "Read only object",
                            "name": "hs_read_only",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fe2",
                            "label": "Recent Closed Order Date",
                            "name": "hs_recent_closed_order_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fe5",
                            "label": "Registered member",
                            "name": "hs_registered_member",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fe8",
                            "label": "Registration Method",
                            "name": "hs_registration_method",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1feb",
                            "label": "Employment Role",
                            "name": "hs_role",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1fee",
                            "label": "Date of first engagement",
                            "name": "hs_sa_first_engagement_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ff1",
                            "label": "Description of first engagement",
                            "name": "hs_sa_first_engagement_descr",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ff4",
                            "label": "Type of first engagement",
                            "name": "hs_sa_first_engagement_object_type",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ff7",
                            "label": "Recent Sales Email Clicked Date",
                            "name": "hs_sales_email_last_clicked",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ffa",
                            "label": "Recent Sales Email Opened Date",
                            "name": "hs_sales_email_last_opened",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d1ffd",
                            "label": "Recent Sales Email Replied Date",
                            "name": "hs_sales_email_last_replied",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2000",
                            "label": "Calculated Mobile Number with country code",
                            "name": "hs_searchable_calculated_international_mobile_number",
                            "type": "phone_number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2003",
                            "label": "Calculated Phone Number with country code",
                            "name": "hs_searchable_calculated_international_phone_number",
                            "type": "phone_number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2006",
                            "label": "Calculated Mobile Number without country code",
                            "name": "hs_searchable_calculated_mobile_number",
                            "type": "phone_number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2009",
                            "label": "Calculated Phone Number without country code",
                            "name": "hs_searchable_calculated_phone_number",
                            "type": "phone_number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d200c",
                            "label": "Employment Seniority",
                            "name": "hs_seniority",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d200f",
                            "label": "Number of sequences actively enrolled",
                            "name": "hs_sequences_actively_enrolled_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2012",
                            "label": "Number of sequences enrolled",
                            "name": "hs_sequences_enrolled_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2015",
                            "label": "Currently in Sequence",
                            "name": "hs_sequences_is_enrolled",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2018",
                            "label": "Shared Teams",
                            "name": "hs_shared_team_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d201b",
                            "label": "Shared Users",
                            "name": "hs_shared_user_ids",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d201e",
                            "label": "Facebook Clicks",
                            "name": "hs_social_facebook_clicks",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2021",
                            "label": "Google Plus Clicks",
                            "name": "hs_social_google_plus_clicks",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2024",
                            "label": "Most Recent Social Click",
                            "name": "hs_social_last_engagement",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2027",
                            "label": "LinkedIn Clicks",
                            "name": "hs_social_linkedin_clicks",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d202a",
                            "label": "Broadcast Clicks",
                            "name": "hs_social_num_broadcast_clicks",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d202d",
                            "label": "Twitter Clicks",
                            "name": "hs_social_twitter_clicks",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2030",
                            "label": "Source Object ID",
                            "name": "hs_source_object_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2033",
                            "label": "Source Portal ID",
                            "name": "hs_source_portal_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2036",
                            "label": "State/Region Code",
                            "name": "hs_state_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2039",
                            "label": "Employment Sub Role",
                            "name": "hs_sub_role",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d203c",
                            "label": "testpurge",
                            "name": "hs_testpurge",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d203f",
                            "label": "testrollback",
                            "name": "hs_testrollback",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2042",
                            "label": "Time between contact creation and deal close",
                            "name": "hs_time_between_contact_creation_and_deal_close",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2045",
                            "label": "Time between contact creation and deal creation",
                            "name": "hs_time_between_contact_creation_and_deal_creation",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2048",
                            "label": "Time in 'Qualified Reconnect (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_166080836",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d204b",
                            "label": "Time in 'Demo Booked (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_40492685",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d204e",
                            "label": "Time in 'Not Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_46674785",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2051",
                            "label": "Time in 'Customer (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2054",
                            "label": "Time in 'Evangelist (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_evangelist",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2057",
                            "label": "Time in 'Lead (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_lead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d205a",
                            "label": "Time in 'Marketing Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_marketingqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d205d",
                            "label": "Time in 'Opportunity (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_opportunity",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2060",
                            "label": "Time in 'Lost (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_other",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2063",
                            "label": "Time in 'Sales Qualified (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_salesqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2066",
                            "label": "Time in 'Subscriber (Lifecycle Stage Pipeline)'",
                            "name": "hs_time_in_subscriber",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2069",
                            "label": "Lead response time",
                            "name": "hs_time_to_first_engagement",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d206c",
                            "label": "Time to move from lead to customer",
                            "name": "hs_time_to_move_from_lead_to_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d206f",
                            "label": "Time to move from marketing qualified lead to customer",
                            "name": "hs_time_to_move_from_marketingqualifiedlead_to_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2072",
                            "label": "Time to move from opportunity to customer",
                            "name": "hs_time_to_move_from_opportunity_to_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2075",
                            "label": "Time to move from sales qualified lead to customer",
                            "name": "hs_time_to_move_from_salesqualifiedlead_to_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2078",
                            "label": "Time to move from subscriber to customer",
                            "name": "hs_time_to_move_from_subscriber_to_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d207b",
                            "label": "Time Zone",
                            "name": "hs_timezone",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d207e",
                            "label": "Twitter ID",
                            "name": "hs_twitterid",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2081",
                            "label": "Unique creation key",
                            "name": "hs_unique_creation_key",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2084",
                            "label": "Updated by user ID",
                            "name": "hs_updated_by_user_id",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2087",
                            "label": "User IDs of all notification followers",
                            "name": "hs_user_ids_of_all_notification_followers",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d208a",
                            "label": "User IDs of all notification unfollowers",
                            "name": "hs_user_ids_of_all_notification_unfollowers",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d208d",
                            "label": "User IDs of all owners",
                            "name": "hs_user_ids_of_all_owners",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2090",
                            "label": "Cumulative time in \"Qualified Reconnect (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_166080836",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2093",
                            "label": "Cumulative time in \"Demo Booked (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_40492685",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2096",
                            "label": "Cumulative time in \"Not Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_46674785",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2099",
                            "label": "Cumulative time in \"Customer (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d209c",
                            "label": "Cumulative time in \"Lead (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_lead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d209f",
                            "label": "Cumulative time in \"Marketing Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_marketingqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20a2",
                            "label": "Cumulative time in \"Opportunity (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_opportunity",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20a5",
                            "label": "Cumulative time in \"Lost (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_other",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20a8",
                            "label": "Cumulative time in \"Sales Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_salesqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ab",
                            "label": "Cumulative time in \"Subscriber (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_cumulative_time_in_subscriber",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ae",
                            "label": "Date entered \"Qualified Reconnect (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_166080836",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20b1",
                            "label": "Date entered \"Demo Booked (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_40492685",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20b4",
                            "label": "Date entered \"Not Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_46674785",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20b7",
                            "label": "Date entered \"Customer (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_customer",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ba",
                            "label": "Date entered \"Lead (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_lead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20bd",
                            "label": "Date entered \"Marketing Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_marketingqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20c0",
                            "label": "Date entered \"Opportunity (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_opportunity",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20c3",
                            "label": "Date entered \"Lost (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_other",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20c6",
                            "label": "Date entered \"Sales Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_salesqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20c9",
                            "label": "Date entered \"Subscriber (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_entered_subscriber",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20cc",
                            "label": "Date exited \"Qualified Reconnect (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_166080836",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20cf",
                            "label": "Date exited \"Demo Booked (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_40492685",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20d2",
                            "label": "Date exited \"Not Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_46674785",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20d5",
                            "label": "Date exited \"Customer (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_customer",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20d8",
                            "label": "Date exited \"Lead (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_lead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20db",
                            "label": "Date exited \"Marketing Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_marketingqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20de",
                            "label": "Date exited \"Opportunity (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_opportunity",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20e1",
                            "label": "Date exited \"Lost (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_other",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20e4",
                            "label": "Date exited \"Sales Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_salesqualifiedlead",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20e7",
                            "label": "Date exited \"Subscriber (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_date_exited_subscriber",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ea",
                            "label": "Latest time in \"Qualified Reconnect (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_166080836",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ed",
                            "label": "Latest time in \"Demo Booked (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_40492685",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20f0",
                            "label": "Latest time in \"Not Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_46674785",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20f3",
                            "label": "Latest time in \"Customer (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_customer",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20f6",
                            "label": "Latest time in \"Lead (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_lead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20f9",
                            "label": "Latest time in \"Marketing Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_marketingqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20fc",
                            "label": "Latest time in \"Opportunity (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_opportunity",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d20ff",
                            "label": "Latest time in \"Lost (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_other",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2102",
                            "label": "Latest time in \"Sales Qualified (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_salesqualifiedlead",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2105",
                            "label": "Latest time in \"Subscriber (Lifecycle Stage Pipeline)\"",
                            "name": "hs_v2_latest_time_in_subscriber",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2108",
                            "label": "Performed in an import",
                            "name": "hs_was_imported",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d210b",
                            "label": "WhatsApp Phone Number",
                            "name": "hs_whatsapp_phone_number",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d210e",
                            "label": "Owner Assigned Date",
                            "name": "hubspot_owner_assigneddate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2111",
                            "label": "Contact owner",
                            "name": "hubspot_owner_id",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2114",
                            "label": "HubSpot Team",
                            "name": "hubspot_team_id",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2117",
                            "label": "HubSpot Score",
                            "name": "hubspotscore",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d211a",
                            "label": "Industry",
                            "name": "industry",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d211d",
                            "label": "Total attendance duration percentage before Attendance API migration",
                            "name": "initial_zoom_webinar_attendance_average_duration",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2120",
                            "label": "Total attendance count before Attendance API migration",
                            "name": "initial_zoom_webinar_attendance_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2123",
                            "label": "Total registration count before Attendance API migration",
                            "name": "initial_zoom_webinar_registration_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2126",
                            "label": "IP City",
                            "name": "ip_city",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2129",
                            "label": "IP Country",
                            "name": "ip_country",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d212c",
                            "label": "IP Country Code",
                            "name": "ip_country_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d212f",
                            "label": "IP Latitude & Longitude",
                            "name": "ip_latlon",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2132",
                            "label": "IP State/Region",
                            "name": "ip_state",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2135",
                            "label": "IP State Code/Region Code",
                            "name": "ip_state_code",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2138",
                            "label": "IP Zipcode",
                            "name": "ip_zipcode",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d213b",
                            "label": "jbjh",
                            "name": "jbjh",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d213e",
                            "label": "Job function",
                            "name": "job_function",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2141",
                            "label": "Job Title",
                            "name": "jobtitle",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2144",
                            "label": "Klout Score",
                            "name": "kloutscoregeneral",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2147",
                            "label": "Last Modified Date",
                            "name": "lastmodifieddate",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d214a",
                            "label": "Last Name",
                            "name": "lastname",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d214d",
                            "label": "Lifecycle Stage",
                            "name": "lifecyclestage",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2150",
                            "label": "LinkedIn profile URL",
                            "name": "linkedin_profile_link",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2153",
                            "label": "LinkedIn Bio",
                            "name": "linkedinbio",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2156",
                            "label": "LinkedIn Connections",
                            "name": "linkedinconnections",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2159",
                            "label": "Long-Description",
                            "name": "long_description",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d215c",
                            "label": "Marital Status",
                            "name": "marital_status",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d215f",
                            "label": "Message",
                            "name": "message",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2162",
                            "label": "Military status",
                            "name": "military_status",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2165",
                            "label": "Mobile Phone Number",
                            "name": "mobilephone",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2168",
                            "label": "MonetizeNow Contact ID",
                            "name": "monetize_contact_id",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d216b",
                            "label": "Last Contacted",
                            "name": "notes_last_contacted",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d216e",
                            "label": "Last Activity Date",
                            "name": "notes_last_updated",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2171",
                            "label": "Next Activity Date",
                            "name": "notes_next_activity_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2174",
                            "label": "Number of Associated Deals",
                            "name": "num_associated_deals",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2177",
                            "label": "Number of times contacted",
                            "name": "num_contacted_notes",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d217a",
                            "label": "Number of Form Submissions",
                            "name": "num_conversion_events",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d217d",
                            "label": "Number of Sales Activities",
                            "name": "num_notes",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2180",
                            "label": "Number of Unique Forms Submitted",
                            "name": "num_unique_conversion_events",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2183",
                            "label": "Number of Employees",
                            "name": "numemployees",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2186",
                            "label": "HubSpot Owner Email (legacy)",
                            "name": "owneremail",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2189",
                            "label": "HubSpot Owner Name (legacy)",
                            "name": "ownername",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d218c",
                            "label": "personal-message",
                            "name": "personal_message",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d218f",
                            "label": "Phone Number",
                            "name": "phone",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2192",
                            "label": "Photo",
                            "name": "photo",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2195",
                            "label": "Previous Company (Boomerang)",
                            "name": "previous_company__boomerang_",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2198",
                            "label": "Priority",
                            "name": "priority",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d219b",
                            "label": "Recent Conversion Date",
                            "name": "recent_conversion_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d219e",
                            "label": "Recent Conversion",
                            "name": "recent_conversion_event_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21a1",
                            "label": "Recent Deal Amount",
                            "name": "recent_deal_amount",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21a4",
                            "label": "Recent Deal Close Date",
                            "name": "recent_deal_close_date",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21a7",
                            "label": "Relationship Status",
                            "name": "relationship_status",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21aa",
                            "label": "Campaign Name",
                            "name": "rh_campaign_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21ad",
                            "label": "Meeting Create Time",
                            "name": "rh_meeting_created_at",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21b0",
                            "label": "Meeting Status",
                            "name": "rh_meeting_status",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21b3",
                            "label": "Meeting Time",
                            "name": "rh_meeting_time",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21b6",
                            "label": "Meeting Type",
                            "name": "rh_meeting_type",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21b9",
                            "label": "No Show",
                            "name": "rh_no_show",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21bc",
                            "label": "Router Name",
                            "name": "rh_router_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21bf",
                            "label": "Salutation",
                            "name": "salutation",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21c2",
                            "label": "School",
                            "name": "school",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21c5",
                            "label": "Seniority",
                            "name": "seniority",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21c8",
                            "label": "Storylane SignUp Date",
                            "name": "signed_up",
                            "type": "date",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21cb",
                            "label": "Demo Session Link",
                            "name": "sl_demo_session_link",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21ce",
                            "label": "Demo Sessions",
                            "name": "sl_demo_sessions",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21d1",
                            "label": "Demo Viewed At",
                            "name": "sl_last_demo_at",
                            "type": "datetime",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21d4",
                            "label": "Demo Checklist Completed",
                            "name": "sl_last_demo_checklist_completed",
                            "type": "bool",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21d7",
                            "label": "Legacy - Storylane",
                            "name": "sl_last_demo_completion",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21da",
                            "label": "Demo Complete (%)",
                            "name": "sl_last_demo_completion_percent",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21dd",
                            "label": "Demo CTA Clicked",
                            "name": "sl_last_demo_cta",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21e0",
                            "label": "Demo Link",
                            "name": "sl_last_demo_link",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21e3",
                            "label": "Demo Name",
                            "name": "sl_last_demo_name",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21e6",
                            "label": "Demo Time (secs)",
                            "name": "sl_last_demo_time_secs",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21e9",
                            "label": "Start date",
                            "name": "start_date",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21ec",
                            "label": "State/Region",
                            "name": "state",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21ef",
                            "label": "Storylane Plan",
                            "name": "storylane_plan",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21f2",
                            "label": "Please share use cases you are considering Storylane",
                            "name": "storylane_use",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21f5",
                            "label": "Storylane use cases",
                            "name": "storylane_use_cases",
                            "type": "enumeration",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21f8",
                            "label": "SurveyMonkey Event Last Updated",
                            "name": "surveymonkeyeventlastupdated",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21fb",
                            "label": "tags",
                            "name": "tags",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d21fe",
                            "label": "Total Revenue",
                            "name": "total_revenue",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2201",
                            "label": "Twitter Bio",
                            "name": "twitterbio",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2204",
                            "label": "Twitter Username",
                            "name": "twitterhandle",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2207",
                            "label": "Twitter Profile Photo",
                            "name": "twitterprofilephoto",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d220a",
                            "label": "Webinar Event Last Updated",
                            "name": "webinareventlastupdated",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d220d",
                            "label": "Website URL",
                            "name": "website",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2210",
                            "label": "Work email",
                            "name": "work_email",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2213",
                            "label": "Postal Code",
                            "name": "zip",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2216",
                            "label": "Average Zoom webinar attendance duration",
                            "name": "zoom_webinar_attendance_average_duration",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d2219",
                            "label": "Total number of Zoom webinars attended",
                            "name": "zoom_webinar_attendance_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d221c",
                            "label": "Last registered Zoom webinar",
                            "name": "zoom_webinar_joinlink",
                            "type": "string",
                            "required": null,
                            "order": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d17fa3ec28638fe35d221f",
                            "label": "Total number of Zoom webinar registrations",
                            "name": "zoom_webinar_registration_count",
                            "type": "number",
                            "required": null,
                            "order": null
                        }
                    }
                ]
            }
        }
    };

    // Rules data for the second dropdown
    const rulesData = {
        "data": {
            "getAllRules": {
                "edges": [
                    {
                        "node": {
                            "id": "6627a9efc6b44ae2c1737fba",
                            "name": "Static",
                            "type": "STATIC"
                        }
                    },
                    {
                        "node": {
                            "id": "6627a9efc6b44ae2c1737fbb",
                            "name": "Dynamic",
                            "type": "MAP"
                        }
                    },
                    {
                        "node": {
                            "id": "6627a9f0c6b44ae2c1737fbc",
                            "name": "Prefix",
                            "type": "PREFIX"
                        }
                    },
                    {
                        "node": {
                            "id": "6627a9f0c6b44ae2c1737fbd",
                            "name": "Suffix",
                            "type": "SUFFIX"
                        }
                    }
                ]
            }
        }
    };

    // CRM data for the third dropdown (with parent-child relationships)
    const crmData = {
        "data": {
            "getCrmMappingSourceListV1": {
                "edges": [
                    {
                        "node": {
                            "id": "66d8928ee3e3e9834f363c7e",
                            "label": "Account (Active)",
                            "order": null,
                            "parentId": "66d8928de3e3e9834f363c7d",
                            "value": "Account",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89290e3e3e9834f363c80",
                            "label": "Account (Tracked)",
                            "order": null,
                            "parentId": "66d8928de3e3e9834f363c7d",
                            "value": "Account",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d8928fe3e3e9834f363c7f",
                            "label": "Contact (Tracked)",
                            "order": null,
                            "parentId": "66d8928de3e3e9834f363c7d",
                            "value": "salesforce_fields",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d8928de3e3e9834f363c7d",
                            "label": "Hubspot Fields",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c81",
                            "value": "salesforce_fields",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "label": "Active Experience Email",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83",
                            "value": "ActiveExperienceEmail",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad06",
                            "label": "Email",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "email",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad07",
                            "label": "Confidence",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "confidence",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad09",
                            "label": "Last Bounced Date",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "lastBouncedDate",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad05",
                            "label": "Boomerang Version ID ",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "boomerangVersionId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad08",
                            "label": "Provided By",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "providedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0b",
                            "label": "Verified",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "verified",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0d",
                            "label": "Type",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "type",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0e",
                            "label": "ID",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad13",
                            "label": "Updated By",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "updatedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad14",
                            "label": "Deleted At",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "deletedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad15",
                            "label": "Deleted By",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "deletedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0c",
                            "label": "Active",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "active",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad11",
                            "label": "Updated At",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "updatedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad12",
                            "label": "Created By",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "createdBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0f",
                            "label": "Workspace ID",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "workspaceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad0a",
                            "label": "Bounced",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "bounced",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc4.669556f02a91fc727cb1ad10",
                            "label": "Created At",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c83.669556f02a91fc727cb1acc4",
                            "value": "createdAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89291e3e3e9834f363c83",
                            "label": "Active Emails",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "active_emails",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "label": "Active Experience",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a",
                            "value": "ActiveExperience",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1accd",
                            "label": "Description",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "description",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acca",
                            "label": "Boomerang Version ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "boomerangVersionId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1accb",
                            "label": "Profile Experience ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "profileExperienceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1accf",
                            "label": "Start Date",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "startDate",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd5",
                            "label": "Created At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "createdAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd6",
                            "label": "Updated At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "updatedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd8",
                            "label": "Updated By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "updatedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd9",
                            "label": "Deleted At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "deletedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acce",
                            "label": "Employment Type",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "employmentType",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acda",
                            "label": "Deleted By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "deletedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd2",
                            "label": "Boomerang Experience ID Location",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "boomerangExperienceLocation",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd7",
                            "label": "Created By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "createdBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1accc",
                            "label": "Title",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "title",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd0",
                            "label": "End Date",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "endDate",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd1",
                            "label": "Boomerang Experience ID Company",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "boomerangExperienceCompany",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd3",
                            "label": "ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acbf.669556f02a91fc727cb1acd4",
                            "label": "Workspace ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c8a.669556f02a91fc727cb1acbf",
                            "value": "workspaceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c8a",
                            "label": "Active Experiences",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "activeExperiences",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "label": "Active Experience Phone",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86",
                            "value": "ActiveExperiencePhone",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad27",
                            "label": "Boomerang Version ID",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "boomerangVersionId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2b",
                            "label": "Extension",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "extension",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad30",
                            "label": "Description",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "description",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad34",
                            "label": "Created At",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "createdAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad35",
                            "label": "Updated At",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "updatedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad37",
                            "label": "Updated By",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "updatedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad28",
                            "label": "Boomerang Experience ID",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "boomerangExperienceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2a",
                            "label": "Type",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "type",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2c",
                            "label": "Extension 1",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "extension1",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad31",
                            "label": "Is Primary",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "isPrimary",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad33",
                            "label": "Workspace ID",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "workspaceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad36",
                            "label": "Created By",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "createdBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad29",
                            "label": "Number",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "number",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad32",
                            "label": "ID",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad38",
                            "label": "Deleted At",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "deletedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2d",
                            "label": "Extension 2",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "extension2",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2e",
                            "label": "Country Code",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "countryCode",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad2f",
                            "label": "Area Code",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "areaCode",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc6.669556f02a91fc727cb1ad39",
                            "label": "Deleted By",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c86.669556f02a91fc727cb1acc6",
                            "value": "deletedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89292e3e3e9834f363c86",
                            "label": "Active Phone Number",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "activePhoneNumbers",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "label": "Basic Information",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84",
                            "value": "person",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5a",
                            "label": "Full Name",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "value": "Full Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5b",
                            "label": "First Name",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "value": "First Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5c",
                            "label": "Last Name",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "value": "Last Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "label": "Person location",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "value": "Person location",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "label": "Person location",
                            "order": null,
                            "parentId": "66d89292e3e3e9834f363c84.66d89546ca8e05b89c696b59",
                            "value": "Person location",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d.66d89548ca8e05b89c696b5e",
                            "label": "Country",
                            "order": null,
                            "parentId": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "value": "Country",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d.66d89548ca8e05b89c696b5f",
                            "label": "Country Code",
                            "order": null,
                            "parentId": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "value": "Country Code",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d.66d89548ca8e05b89c696b60",
                            "label": "State",
                            "order": null,
                            "parentId": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "value": "State",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d.66d89548ca8e05b89c696b61",
                            "label": "City",
                            "order": null,
                            "parentId": "66d89546ca8e05b89c696b59.66d89546ca8e05b89c696b5d",
                            "value": "City",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89292e3e3e9834f363c84",
                            "label": "Person Details",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "boomerang_person_details",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89292e3e3e9834f363c85",
                            "label": "Plays",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "plays",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c88",
                            "label": "Past Relationships",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "previousRelationships",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "label": "Social Profile",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89",
                            "value": "Social Profile",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89548ca8e05b89c696b62.66d89549ca8e05b89c696b63",
                            "label": "Social Platform",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "value": "Social Platform",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89548ca8e05b89c696b62.66d89549ca8e05b89c696b64",
                            "label": "Social Profile User Name",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "value": "Social Profile User Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89548ca8e05b89c696b62.66d89549ca8e05b89c696b65",
                            "label": "Social Profile First Name",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "value": "Social Profile First Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89548ca8e05b89c696b62.66d89549ca8e05b89c696b66",
                            "label": "Social Profile Last Name",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "value": "Social Profile Last Name",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89548ca8e05b89c696b62.66d89549ca8e05b89c696b67",
                            "label": "Social Profile Link",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c89.66d89548ca8e05b89c696b62",
                            "value": "Social Profile Link",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c89",
                            "label": "Social Profile",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "boomerang_social_profile",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "label": "Previous Experience",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b",
                            "value": "PreviousExperience",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acfa",
                            "label": "End Date",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "endDate",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acfe",
                            "label": "Workspace ID",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "workspaceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1ad02",
                            "label": "Updated By",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "updatedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf4",
                            "label": "Boomerang Version ID",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "boomerangVersionId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf7",
                            "label": "Description",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "description",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf8",
                            "label": "Employment Type",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "employmentType",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf9",
                            "label": "Start Date",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "startDate",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1ad01",
                            "label": "Created By",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "createdBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf5",
                            "label": "Profile Experience ID",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "profileExperienceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acf6",
                            "label": "Title",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "title",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acfb",
                            "label": "Boomerang Experience ID Company",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "boomerangExperienceCompany",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acfc",
                            "label": "Boomerang Experience ID Location",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "boomerangExperienceLocation",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1ad00",
                            "label": "Updated At",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "updatedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1ad04",
                            "label": "Deleted By",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "deletedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acfd",
                            "label": "ID",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1acff",
                            "label": "Created At",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "createdAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc0.669556f02a91fc727cb1ad03",
                            "label": "Deleted At",
                            "order": null,
                            "parentId": "66d89294e3e3e9834f363c8b.669556f02a91fc727cb1acc0",
                            "value": "deletedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89294e3e3e9834f363c8b",
                            "label": "Tracked Experiences",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "trackedExperiences",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "label": "Boomerang Version",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87",
                            "value": "BoomerangVersion",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1ace8",
                            "label": "Version",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "version",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1ace9",
                            "label": "Version Status",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "versionStatus",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acea",
                            "label": "Serviceable Market",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "serviceableMarket",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acef",
                            "label": "Updated At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "updatedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1aced",
                            "label": "Workspace ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "workspaceId",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1ace7",
                            "label": "Boomerang ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "boomerang_id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acee",
                            "label": "Created At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "createdAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acf2",
                            "label": "Deleted At",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "deletedAt",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acf3",
                            "label": "Deleted By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "deletedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1aceb",
                            "label": "Pushed To Salesforce",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "pushedToSalesforce",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acec",
                            "label": "ID",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "id",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acf0",
                            "label": "Created By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "createdBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "669556f02a91fc727cb1acc3.669556f02a91fc727cb1acf1",
                            "label": "Updated By",
                            "order": null,
                            "parentId": "66d89293e3e3e9834f363c87.669556f02a91fc727cb1acc3",
                            "value": "updatedBy",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89293e3e3e9834f363c87",
                            "label": "Boomerang Version",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c82",
                            "value": "boomerangVersion",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89291e3e3e9834f363c82",
                            "label": "Person Fields",
                            "order": null,
                            "parentId": "66d89291e3e3e9834f363c81",
                            "value": "person",
                            "type": null
                        }
                    },
                    {
                        "node": {
                            "id": "66d89291e3e3e9834f363c81",
                            "label": "All Values",
                            "order": null,
                            "parentId": "",
                            "value": "SALESFORCE_INTEGRATIONS_DROPDOWNS",
                            "type": null
                        }
                    }
                ]
            }
        }
    };

    const [selectedField, setSelectedField] = useState("");
    const [selectedRule, setSelectedRule] = useState("");
    const [selectedCrm, setSelectedCrm] = useState("");
    const [openMenuIds, setOpenMenuIds] = useState([]);

    // Function to build the tree from flat CRM data based on parentId
    const buildTree = (nodes) => {
        const map = {};
        const roots = [];

        // Create a map of id to node
        nodes.forEach((node) => {
            map[node.id] = { ...node, children: [] };
        });

        // Build the tree structure
        nodes.forEach((node) => {
            if (node.parentId) {
                if (map[node.parentId]) {
                    map[node.parentId].children.push(map[node.id]);
                }
            } else {
                roots.push(map[node.id]);
            }
        });

        return roots;
    };

    const crmNodes = crmData.data.getCrmMappingSourceListV1.edges.map((edge) => edge.node);
    const crmTree = buildTree(crmNodes);

    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };

    const handleRuleChange = (e) => {
        setSelectedRule(e.target.value);
    };

    const handleCrmChange = (label) => {
        setSelectedCrm(label); // Properly set the selected CRM value
    };

    const toggleMenu = (id) => {
        setOpenMenuIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((prevId) => prevId !== id)
                : [...prevIds, id]
        );
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenMenuIds([]);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Render the tree as a custom nested menu
    const renderTreeMenu = (nodes) => {
        return (
            <ul className="nested-menu">
                {nodes.map((node, index) => (
                    <li key={`${node.id}-${index}`}>
                        <button
                            className="menu-item"
                            onClick={() => {
                                handleCrmChange(node.label); // Ensure CRM value gets selected
                                toggleMenu(node.id);
                            }}
                        >
                            {node.label}
                        </button>
                        {node.children && node.children.length > 0 && openMenuIds.includes(node.id) && (
                            <ul className="submenu">{renderTreeMenu(node.children)}</ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    const generateJson = () => {
        const generatedJson = [
            {
                targetField: {
                    id: selectedCrm || "crm-1",
                    _id: {
                        $oid: "668c3ac8e5b1c44a77df39be",
                    },
                },
                transformations: [
                    {
                        order: 1,
                        parameters: {
                            value: "", // You can dynamically set values here if needed
                        },
                        ruleId: selectedRule || "6627a9efc6b44ae2c1737fba",
                        version: "1",
                    },
                ],
                order: 20000,
                workspaceId: "6554734342dcff15f568121b",
                isDeleted: false,
                sourceFields: [
                    {
                        rootPath: selectedField || "1",
                        id: "d28b1932-9923-4dc0-9f66-c17db96cfbaf",
                        _id: {
                            $oid: "66cc0714056d30fa8e11510e",
                        },
                    },
                ],
                __v: 0,
                createdAt: {
                    $date: "2024-07-08T19:15:20.661Z",
                },
                updatedAt: {
                    $date: "2024-08-26T04:39:48.342Z",
                },
            },
        ];

        console.log(JSON.stringify(generatedJson, null, 2));
    };

    return (
        <div ref={dropdownRef}>
            <h1>Create JSON from Dropdowns</h1>

            {/* First dropdown for Fields */}
            <div className="dropdown-container">
                <label>Field:</label>
                <div className="menu-container">
                    <select onChange={handleFieldChange} className="dropdown">
                        <option value="">Select Field</option>
                        {fieldsData.data.getFields.edges.map((edge) => (
                            <option key={edge.node.id} value={edge.node.label}>
                                {edge.node.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Second dropdown for Rules */}
            <div className="dropdown-container">
                <label>Rule:</label>
                <div className="menu-container">
                    <select onChange={handleRuleChange} className="dropdown">
                        <option value="">Select Rule</option>
                        {rulesData.data.getAllRules.edges.map((edge) => (
                            <option key={edge.node.id} value={edge.node.name}>
                                {edge.node.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Third dropdown for CRM (tree structure as nested dropdown) */}
            <div className="dropdown-container">
                <label>CRM Mapping:</label>
                <div className="menu-container">{renderTreeMenu(crmTree)}</div>

                {/* Display selected value */}
                <div>
                    <h2>Selected CRM Mapping</h2>
                    <p>{selectedCrm}</p>
                </div>

                {/* Add CSS for styling */}
                <style>{`
        .app-container {
          font-family: Arial, sans-serif;
        }
        .dropdown-container {
          margin-bottom: 20px;
        }
        .menu-container {
          position: relative;
        }
        .dropdown {
          padding: 10px;
          width: 200px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
        }
        .nested-menu {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }
        .menu-item {
          background-color: #f9f9f9;
          padding: 10px;
          border: 1px solid #ddd;
          display: block;
          width: 200px;
          text-align: left;
          cursor: pointer;
        }
        .submenu {
          margin-top: 10px;
          padding-left: 20px;
        }
        li:hover > .submenu {
          display: block;
        }
        .menu-item:hover {
          background-color: #ddd;
        }
        `}</style>
            </div>

            {/* Button to generate the JSON */}
            <button onClick={generateJson}>Generate JSON</button>

            {/* Displaying the generated JSON */}
            <div>
                <h2>Generated JSON</h2>
                <pre>{`{
  "field": "${selectedField}",
  "rule": "${selectedRule}",
  "crm": "${selectedCrm}"
}`}</pre>
            </div>
        </div>
    );
};

export default App1;