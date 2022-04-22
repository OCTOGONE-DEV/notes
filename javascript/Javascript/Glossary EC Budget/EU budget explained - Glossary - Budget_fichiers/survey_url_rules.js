/**
 * @fileOverview
 * 
 * This JSONP specifies which surveys should be loaded depending on the current URL. 
 * 
 * The JSONP structure is the following:
 * 
 * *   pop_up_settings_file
 * >   URL to the popup settings file, described in *data/custom_invitation_settings.js*
 *
 *     *   white_list
 *     >   Array of regular expressions as strings
 *
 *     *   black_list
 *     >   Array of regular expressions as strings
 *
 * 
 * The expressions in the black list are stronger than the expressions in the white list.
 * 
 */

 SurveyInvitation.load_survey_url_rules_callback({
  "surveys": [
    {
    "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/ernst_young/01/invitation_settings.js": {
      "white_list": [
        "https?://ec\.europa\.eu/agriculture/index_en",
        "https?://ec\.europa\.eu/info/departments/communication_en",
        "https?://ec\.europa\.eu/competition/",
        "https?://ec\.europa\.eu/dgs/education_culture/",
        "https?://ec\.europa\.eu/social/home\.jsp",
        "https?://ec\.europa\.eu/dgs/environment/index_en\.htm",
        "https?://ec\.europa\.eu/info/departments/financial\-stability\-financial\-services\-and\-capital\-markets\-union_en",
        "https?://ec\.europa\.eu/justice/index_en\.htm",
        "https?://ec\.europa\.eu/growth/index_en",
        // "https?://ec\.europa\.eu/anti\-fraud/home_en",
        "https?://ec\.europa\.eu/regional_policy/en/",
        "https?://ec\.europa\.eu/info/departments/research\-and\-innovation_en",
        "https?://ec\.europa\.eu/eip/agriculture/en",
        "https?://enrd\.ec\.europa\.eu/",
        "https?://europa\.eu/european\-union/contact/meet\-us_en",
        "https?://europa\.eu/european\-union/contact\-point\-type/team\-europe_en",
        "https?://ec\.europa\.eu/competition/ecn/index_en\.html",
        "https?://ec\.europa\.eu/programmes/erasmus\-plus/contact/national\-agencies_en",
        "https?://ec\.europa\.eu/programmes/creative\-europe/contact_en",
        "https?://www\.salto\-youth\.net/",
        "https?://eurodesk\.eu/",
        "https?://www\.enic\-naric\.net/",
        "https?://webgate\.ec\.europa\.eu/fpfis/mwikis/eurydice/index\.php/Main_Page",
        "https?://ec\.europa\.eu/eures/public/en",
        "https?://europass\.cedefop\.europa\.eu/",
        "https?://www\.euroguidance\.eu/",
        "https?://ec\.europa\.eu/social/main\.jsp\?catId=1100&langId=en",
        "https?://ec\.europa\.eu/transparency/regexpert/index\.cfm\?do=groupDetail\.groupDetail&groupID=1829",
        "https?://ec\.europa\.eu/social/main\.jsp\?catId=157",
        "https?://ec\.europa\.eu/environment/networks/greenspider/",
        "https?://ec\.europa\.eu/info/fin\-net_en",
        "https?://ec\.europa\.eu/consumers/solving_consumer_disputes/non\-judicial_redress/ecc\-net/index_en\.htm",
        "https?://een\.ec\.europa\.eu/",
        "https?://ec\.europa\.eu/solvit/",
        "https?://europa\.eu/youreurope/index\.htm",
        "https?://ec\.europa\.eu/anti\-fraud/media\-corner/anti\-fraud\-communicators\-network_en",
        "https?://ec\.europa\.eu/regional_policy/en/policy/communication/inform\-network/",
        "https?://euraxess\.ec\.europa\.eu/",
        "https?://ec\.europa\.eu/research/participants/portal/desktop/en/support/national_contact_points\.html",
        "https?://ec\.europa\.eu/austria/home_de",
        "https?://ec\.europa\.eu/belgium",
        "https?://ec\.europa\.eu/bulgaria/home_bg",
        "https?://ec\.europa\.eu/croatia/news_hr",
        "https?://ec\.europa\.eu/cyprus/",
        "https?://ec\.europa\.eu/czech\-republic/home_cs",
        "https?://ec\.europa\.eu/denmark/home_da",
        "https?://ec\.europa\.eu/estonia/",
        "https?://ec\.europa\.eu/finland/home_fi",
        "https?://ec\.europa\.eu/france/home_fr",
        "https?://ec\.europa\.eu/germany/home_de",
        "https?://ec\.europa\.eu/greece/home_el",
        "https?://ec\.europa\.eu/hungary/home_hu",
        "https?://ec\.europa\.eu/ireland/",
        "https?://ec\.europa\.eu/italy/",
        "https?://ec\.europa\.eu/latvia/home_lv",
        "https?://ec\.europa\.eu/lithuania/",
        "https?://ec\.europa\.eu/luxembourg/home_fr",
        "https?://ec\.europa\.eu/malta/",
        "https?://ec\.europa\.eu/netherlands/",
        "https?://ec\.europa\.eu/poland/home_pl",
        "https?://ec\.europa\.eu/portugal/home_pt",
        "https?://ec\.europa\.eu/romania/home_ro",
        "https?://ec\.europa\.eu/slovakia/",
        "https?://ec\.europa\.eu/slovenia/",
        "https?://ec\.europa\.eu/spain/home_es",
        "https?://ec\.europa\.eu/sweden/",
        "https?://ec\.europa\.eu/unitedkingdom/"

      ], 
      "black_list": [
      ]
    }
  },
  // {
  //   "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/sample_project/sample_invitation/sample_invitation_settings.js": {
  //     "white_list": [
  //       "https?://ec\.europa\.eu/europeaid/general_en#show-test-survey",
  //     ], 
  //     "black_list": [
  //     ]
  //   }
  // },
  // {
  //   "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/european-union/02/invitation_settings.js": {
  //     "white_list": [
  //         "https?://europa\.eu/european\-union/contact_en",
  //         "https?://europa\.eu/european\-union/contact/call-us_en",
  //         "https?://europa\.eu/european\-union/contact/write-to-us_en"
  //     ], 
  //     "black_list": [
  //     ]
  //   }
  // },
  // {
  //   "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/digital_transformation/08/task_18_invitation_settings.js": {
  //     "white_list": [
  //       "https?://ec\.europa\.eu/europeaid",
  //     ], 
  //     "black_list": [
  //     ]
  //   }
  // }
  ]
});
