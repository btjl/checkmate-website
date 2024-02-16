import React from "react";
import { arrowButtonRight, arrowButtonDown } from "../assets";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const detailsRef = useRef({});
  const [isOpenMap, setIsOpenMap] = React.useState({});

  const toggleDetails = (questionNumber, isOpen) => {
    setIsOpenMap({ ...isOpenMap, [questionNumber]: isOpen });
  };

  return (
    <div id="faq" className={`flex flex-col items-center text-checkShadeDark`}>
      <h1 className="flex-1 font-poppins font-bold text-[36px] md:text-[48px] text-checkShadeDark w-full text-center">
        {t("faq.title")}
      </h1>

      <div className="flex flex-col px-0 sm:px-4 md:px-12 xl:max-w-[1080px] w-full items-center font-workSans">
        <details
          ref={(el) => (detailsRef.current["is-checkmate-free-to-us"] = el)}
          open={isOpenMap["is-checkmate-free-to-us"]}
          onToggle={(e) =>
            toggleDetails("is-checkmate-free-to-us", e.target.open)
          }
          className="w-full"
          id="is-checkmate-free-to-us"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-checkShadeDark text-xl font-medium">
                {t("faq.question_1")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["is-checkmate-free-to-us"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 mt-4 text-checkGrayModal text-base">
            <span className="font-bold">{t("faq.answer_1")}</span>{" "}
            {t("faq.answer_2")}
          </p>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300 mt-0"></div>
        <details
          ref={(el) => (detailsRef.current["how-does-checkmate-work"] = el)}
          open={isOpenMap["how-does-checkmate-work"]}
          onToggle={(e) =>
            toggleDetails("how-does-checkmate-work", e.target.open)
          }
          className="w-full "
          id="how-does-checkmate-work"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_2")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-does-checkmate-work"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal flex flex-col gap-y-2 text-base">
            <p>{t("faq.answer_2_pretext")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_matching")}
            </h3>
            <p>{t("faq.answer_2_matching_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_found_match")}
            </h3>
            <p>{t("faq.answer_2_found_match_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_no_match")}
            </h3>
            <p>{t("faq.answer_2_no_match_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_voting")}
            </h3>
            <p>{t("faq.answer_2_heading_voting_pretext")}</p>
            <ol className="list-decimal	pl-6 pb-2">
              <li>{t("faq.answer_2_heading_voting_list_1")}</li>
              <li>{t("faq.answer_2_heading_voting_list_2")}</li>
              <li>{t("faq.answer_2_heading_voting_list_3")}</li>
              <li>{t("faq.answer_2_heading_voting_list_4")}</li>
              <li>{t("faq.answer_2_heading_voting_list_5")}</li>
              <li>{t("faq.answer_2_heading_voting_list_6")}</li>
              <li>{t("faq.answer_2_heading_voting_list_7")}</li>
            </ol>
            <p>{t("faq.answer_2_heaidng_voting_footer")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_outcome")}
            </h3>
            <p>{t("faq.answer_2_heading_outcome_pretext")}</p>
            <ol className="list-decimal pl-6">
              <li>{t("faq.answer_2_heading_outcome_list_1")}</li>
              <li>{t("faq.answer_2_heading_outcome_list_2")}</li>
              <li>{t("faq.answer_2_heading_outcome_list_3")}</li>
              <li>
                {t("faq.answer_2_heading_outcome_list_4")}
                <ol className="list-alpha pl-6">
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_1a")}{" "}
                    <strong>&gt;20%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_1b")}
                    <ol className="list-roman pl-6">
                      <li>{t("faq.answer_2_heading_outcome_list_4_1_1")}</li>
                      <li>{t("faq.answer_2_heading_outcome_list_4_1_2")}</li>
                    </ol>
                  </li>
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_2a")}{" "}
                    <strong>&gt;80%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_2b")}
                  </li>
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_3a")}{" "}
                    <strong>&gt;50%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_3b")}
                    <ol className="list-roman pl-6">
                      <li>{t("faq.answer_2_heading_outcome_list_4_3_1")}</li>
                      <li>{t("faq.answer_2_heading_outcome_list_4_3_2")}</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                {t("faq.answer_2_heading_outcome_list_5")}
                <ol className="list-alpha pl-6">
                  <li>{t("faq.answer_2_heading_outcome_list_5_1")}</li>
                  <li>{t("faq.answer_2_heading_outcome_list_5_2")}</li>
                </ol>
              </li>
            </ol>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["become-a-fact-checker"] = el)}
          open={isOpenMap["become-a-fact-checker"]}
          onToggle={(e) =>
            toggleDetails("become-a-fact-checker", e.target.open)
          }
          className="w-full "
          id="become-a-fact-checker"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_3")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["become-a-fact-checker"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal flex flex-col gap-y-4 text-base">
            <p>{t("faq.answer_3")}</p>
            <p>
              {t("faq.answer_3_cta")}{" "}
              <a
                href="mailto:checkmate@better.sg"
                className="underline text-checkPurple"
              >
                {t("faq.answer_3_cta_email")}
              </a>{" "}
            </p>
            {/** hidden for now <img src={qrFc} className="self-center" />
            <span className="self-center">QR Code to CheckMate's fact-checker bot</span>*/}
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["what-data-collected"] = el)}
          open={isOpenMap["what-data-collected"]}
          onToggle={(e) => toggleDetails("what-data-collected", e.target.open)}
          className="w-full "
          id="what-data-collected"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_4")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["what-data-collected"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal text-base">
            <p>
              {t("faq.answer_4a")}{" "}
              <span className="underline font-bold">{t("faq.answer_4b")}</span>{" "}
              {t("faq.answer_4c")}{" "}
              <span className="underline font-bold">{t("faq.answer_4d")}.</span>
              .
            </p>
            <p>
              {t("faq.answer_4e")}{" "}
              <Link
                to="privacy-policy"
                className="font-bold text-checkPurple underline"
              >
                {t("faq.answer_4f")}
              </Link>
              .
            </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) =>
            (detailsRef.current["how-collaborate-with-scamshield"] = el)
          }
          open={isOpenMap["how-collaborate-with-scamshield"]}
          onToggle={(e) =>
            toggleDetails("how-collaborate-with-scamshield", e.target.open)
          }
          className="w-full "
          id="how-collaborate-with-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_5")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-collaborate-with-scamshield"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4 text-base">
            <p>
              {t("faq.answer_5_1_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://better.sg"
              >
                {t("faq.answer_5_1_bettersg")}.
              </a>
              {t("faq.answer_5_1_2")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://www.scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              .
            </p>
            <p>
              {t("faq.answer_5_2_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              , {t("faq.answer_5_2_2")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              . {t("faq.answer_5_2_3")},{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>{" "}
              {t("faq.answer_5_2_4")}
            </p>
            <p>
              {t("faq.answer_5_3_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              , {t("faq.answer_5_3_2")}{" "}
            </p>
            <p>{t("faq.answer_5_4_1")} </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["what-is-scamshield"] = el)}
          open={isOpenMap["what-is-scamshield"]}
          onToggle={(e) => toggleDetails("what-is-scamshield", e.target.open)}
          className="w-full "
          id="what-is-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_6")} {t("entity.scamshield")}?
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["what-is-scamshield"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4">
            <p>
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://www.scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>{" "}
              {t("faq.answer_6_1")}
            </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["how-long-does-it-take"] = el)}
          open={isOpenMap["how-long-does-it-take"]}
          onToggle={(e) =>
            toggleDetails("how-long-does-it-take", e.target.open)
          }
          className="w-full "
          id="how-long-does-it-take"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_7")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-long-does-it-take"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4 text-base">
            <p>{t("faq.answer_7_1")} </p>
            <p>
              {t("faq.answer_7_2")}{" "}
              <a href="https://bit.ly/checkmate-feedback" className="underline">
                {t("faq.answer_7_2_link")}
              </a>
              .
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export const faqTranslations = {
  en: {
    "faq.title": "Frequently Asked Questions",
    // Is CheckMate free to use?
    "faq.question_1": "Is CheckMate free to use?",
    "faq.answer_1": "Absolutely!",
    "faq.answer_2": "CheckMate is free to use and free for life.",
    // How does CheckMate work?
    "faq.question_2": "How does CheckMate work?",
    "faq.answer_2_pretext":
      "When you send a message to CheckMate for checking, the following happens:",
    "faq.answer_2_heading_matching": "Matching", // Matching
    "faq.answer_2_matching_text":
      "We check if this message has been received before, after ignoring any phone numbers mentioned in the message",
    "faq.answer_2_heading_found_match": "If there is a match", // If there is a match
    "faq.answer_2_found_match_text":
      "CheckMate will reply based on the previously-voted classification of the message (see section on Voting Options below)",
    "faq.answer_2_heading_no_match": "If there is no match", // If there is no match
    "faq.answer_2_no_match_text":
      "Our CheckMates will be triggered to vote on your message. CheckMates will vote as such:",
    "faq.answer_2_heading_voting": "Voting Options", // Voting Options
    "faq.answer_2_heading_voting_pretext":
      "First, CheckMates decide if the message comes under either of these categories",
    "faq.answer_2_heading_voting_list_1":
      "Scams (Messages intended to obtain money/personal information via deception)",
    "faq.answer_2_heading_voting_list_2":
      "Suspicious Activity (Messages representing potential illicit activity, e.g. moneylending/prostitution)",
    "faq.answer_2_heading_voting_list_3":
      "News/Information/Opinion (Messages intended to inform/convince a broad base of people)",
    "faq.answer_2_heading_voting_list_4":
      "Spam (Unsolicited spam, such as marketing messages)",
    "faq.answer_2_heading_voting_list_5":
      "Trivial (Trivial/banal messages with nothing to assess)",
    "faq.answer_2_heading_voting_list_6":
      "Legitimate (Message has a legitimate source but doesn't contain claims that can be assessed, e.g. transactional messages)",
    "faq.answer_2_heading_voting_list_7":
      "Unsure (Our checkers are unsure how to categorise this message)",
    "faq.answer_2_heaidng_voting_footer":
      "If a CheckMate decide that the message falls under the third category (“News/Information/Opinion”), they then choose a number from 0-5 to reflect how true they think the message is.",
    "faq.answer_2_heading_outcome": "How Voting Determines the Outcome", // How Voting Determines the Outcome
    "faq.answer_2_heading_outcome_pretext":
      "Every time a vote comes in, the system does the following:",
    "faq.answer_2_heading_outcome_list_1":
      "If more than 50% of all votes cast so far are on any one category, it is assigned that category",
    "faq.answer_2_heading_outcome_list_2":
      "If the votes on scams and suspicious activity combined are greater than 50%, we assign it whichever of the two categories has more votes",
    "faq.answer_2_heading_outcome_list_3": `If none of these thresholds are exceeded, that means there is little agreement among checkers. It is automatically categorised as "unsure"`,
    "faq.answer_2_heading_outcome_list_4":
      "Determine whether message should be considered assessed. There are three different thresholds for this",
    "faq.answer_2_heading_outcome_list_4_1a":
      "If the message has been categorised either as scam or as suspicious, it is considered assessed if",
    "faq.answer_2_heading_outcome_list_4_1b":
      "of CheckMates have voted. This lower threshold is because:",
    "faq.answer_2_heading_outcome_list_4_1_1":
      "It enables a fast response to counter scams",
    "faq.answer_2_heading_outcome_list_4_1_2":
      "Scams are relative easy to assess, so we're more confident in our CheckMates getting this assessment right",
    "faq.answer_2_heading_outcome_list_4_2a":
      "If our CheckMates are unsure of the message, we only consider it assessed if ",
    "faq.answer_2_heading_outcome_list_4_2b":
      "of CheckMates have voted. This high threshold is because we want to give our checkers more time to reach a consensus.",
    "faq.answer_2_heading_outcome_list_4_3a":
      "Otherwise the message is considered assessed if",
    "faq.answer_2_heading_outcome_list_4_3b":
      "of fact checkers have voted. This threshold is higher than scams because",
    "faq.answer_2_heading_outcome_list_4_3_1":
      "While the other categories can also be problematic, it's less urgent",
    "faq.answer_2_heading_outcome_list_4_3_2":
      "Misinformation is typically more subjective. Gathering more votes allows us to be more confident of the final outcome.",
    "faq.answer_2_heading_outcome_list_5":
      "Once the message is determined to be assessed, two things happen",
    "faq.answer_2_heading_outcome_list_5_1":
      "All users that have sent in this message and have not received a reply, will receive a reply based on its tag, or the mean truth score given by our CheckMates, (if message is neither tagged as scam, suspicious, or irrelevant).",
    "faq.answer_2_heading_outcome_list_5_2":
      "From now on, users who send in this message will receive an immediate reply based on the prevailing tag / mean truth score of the message.",
    // How can I help and become a fact-checker?
    "faq.question_3": "How can I help and become a fact-checker?",
    "faq.answer_3":
      "We're glad to hear that you're interested in helping to combat fake news and scams!",
    "faq.answer_3_cta": "To get started, please reach out to us @ ",
    "faq.answer_3_cta_email": "checkmate@better.sg",
    // What kind of data can CheckMate see and collect from me?
    "faq.question_4":
      "What kind of data can CheckMate see and collect from me?",
    "faq.answer_4a":
      "Messaging the CheckMate bot is like messaging someone in Whatsapp. CheckMate will only receive",
    "faq.answer_4b": "your number",
    "faq.answer_4c": "and the",
    "faq.answer_4d": "message you are sending",
    "faq.answer_4e": "For more information, you can view our",
    "faq.answer_4f": "Privacy Policy",
    // How does CheckMate collaborate with ScamShield?
    "faq.question_5": "How does CheckMate collaborate with ScamShield?",
    "faq.answer_5_1_1":
      "CheckMate is an independent, non-government initiative by the non-profit organization",
    "faq.answer_5_1_bettersg": "better.sg.",
    "faq.answer_5_1_2":
      "We understand that combatting scams and dubious messages requires a collaborative approach to safeguard everyone. That's why we are currently exploring a partnership with",
    "faq.answer_5_2_1": "Once we have linked up with",
    "faq.answer_5_2_2":
      "when you send in a message, and our CheckMates identify it as a scam, we will ask for your consent to share that specific message anonymously with",
    "faq.answer_5_2_3": "If you agree",
    "faq.answer_5_2_4":
      "will include the message in the national scams database in order to help fight scams in Singapore.",
    "faq.answer_5_3_1":
      "Your consent is sought for each individual message. You may choose to share some messages with",
    "faq.answer_5_3_2":
      "while deciding not to share others. We will seek your consent for every message separately.",
    "faq.answer_5_4_1":
      "As for your privacy, rest assured that no other information CheckMate has access to will be shared. Your phone number and identity will remain anonymous.",
    // What is ScamShield?
    "faq.question_6": "What is",
    "faq.answer_6_1":
      "is an anti-scam product developed by the National Crime Prevention Council and Open Government Products.",
    // How long does it take for CheckMate to assess messages?
    "faq.question_7": "How long does it take for CheckMate to assess messages?",
    "faq.answer_7_1":
      "CheckMate tries to balance speed and accuracy when it comes to assessing messages. To provide a robust answer, we typically prefer to have more volunteers assess a message. However, we understand speed is of essence for you. We are typically able to provide an assessment within hours of receiving your message, and are consistently striving to make this timing shorter without compromising on the quality of our assessment.",
    "faq.answer_7_2":
      "We have also introduced mixed-model machine learning to assist with the matching and classification of messages, which has allowed us to respond faster to a wider variety of messages. If we do not respond to your message with an assessment within 24 hours of sending it in, please report it",
    "faq.answer_7_2_link": "here",
  },
  cn: {
    "faq.title": "经常问的问题",
    // Is CheckMate free to use?
    "faq.question_1": "CheckMate 可以免费使用吗？",
    "faq.answer_1": "绝对地!",
    "faq.answer_2": "CheckMate 可免费使用，并且终身免费.",
    // How does CheckMate work?
    "faq.question_2": "CheckMate 的工作原理?",
    "faq.answer_2_pretext":
      "当您向 CheckMate 发送消息进行检查时，会发生以下情况:",
    "faq.answer_2_heading_matching": "匹配", // Matching
    "faq.answer_2_matching_text":
      "在忽略消息中提到的任何电话号码后，我们检查之前是否收到过此消息",
    "faq.answer_2_heading_found_match": "如果有匹配的话", // If there is a match
    "faq.answer_2_found_match_text":
      "CheckMate 将根据之前投票的消息分类进行回复（请参阅下面的投票选项部分",
    "faq.answer_2_heading_no_match": "如果没有匹配", // If there is no match
    "faq.answer_2_no_match_text":
      "我们的 CheckMates 将被触发对您的消息进行投票。 CheckMates 将这样投票:",
    "faq.answer_2_heading_voting": "投票选项", // Voting Options
    "faq.answer_2_heading_voting_pretext":
      "首先，CheckMates 决定消息是否属于以下类别之一",
    "faq.answer_2_heading_voting_list_1":
      "诈骗（旨在通过欺骗手段获取金钱/个人信息的消息）",
    "faq.answer_2_heading_voting_list_2":
      "可疑活动（代表潜在非法活动的消息，例如放贷/卖淫）",
    "faq.answer_2_heading_voting_list_3":
      "新闻/信息/意见（旨在告知/说服广大人民的消息）",
    "faq.answer_2_heading_voting_list_4":
      "垃圾邮件（未经请求的垃圾邮件，例如营销消息）",
    "faq.answer_2_heading_voting_list_5":
      "琐碎（琐碎/平庸的消息，没有什么可评估的）",
    "faq.answer_2_heading_voting_list_6":
      "合法（消息具有合法来源，但不包含可评估的声明，例如交易消息）",
    "faq.answer_2_heading_voting_list_7":
      "不确定（我们的检查人员不确定如何对此消息进行分类）",
    "faq.answer_2_heaidng_voting_footer":
      "如果 CheckMate 确定该消息属于第三类（“新闻/信息/意见”），那么他们会选择 0-5 之间的一个数字来反映他们认为该消息的真实性。",
    "faq.answer_2_heading_outcome": "投票如何决定结果", // How Voting Determines the Outcome
    "faq.answer_2_heading_outcome_pretext":
      "每次投票时，系统都会执行以下操作：",
    "faq.answer_2_heading_outcome_list_1":
      "如果迄今为止所有投票中超过 50% 属于任一类别，则分配该类别",
    "faq.answer_2_heading_outcome_list_2":
      "如果诈骗和可疑活动的投票合计超过 50%，我们将分配给这两个类别中得票最多的一个",
    "faq.answer_2_heading_outcome_list_3":
      "如果没有超过这些阈值，则意味着检查者之间几乎没有达成一致。它被自动分类为“不确定”",
    "faq.answer_2_heading_outcome_list_4":
      "确定是否应考虑评估消息。对此有三个不同的阈值",
    "faq.answer_2_heading_outcome_list_4_1a":
      "如果该消息被归类为诈骗或可疑，则如果超过 20% ",
    "faq.answer_2_heading_outcome_list_4_1b":
      "的 CheckMates 投票，则视为已评估。这个较低的阈值是因为：",
    "faq.answer_2_heading_outcome_list_4_1_1": "它可以快速响应反诈骗",
    "faq.answer_2_heading_outcome_list_4_1_2":
      "诈骗相对容易评估，因此我们对 CheckMates 正确评估更有信心",
    "faq.answer_2_heading_outcome_list_4_2a":
      "如果我们的 CheckMates 不确定该消息，我们仅在超过 ",
    "faq.answer_2_heading_outcome_list_4_2b":
      "的 CheckMates 投票时才会考虑对其进行评估。这个高门槛是因为我们希望给我们的检查员更多的时间来达成共识。",
    "faq.answer_2_heading_outcome_list_4_3a": "否则，如果超过",
    "faq.answer_2_heading_outcome_list_4_3b":
      "的事实检查者投票，则该消息被视为已评估。这个门槛比诈骗更高，因为",
    "faq.answer_2_heading_outcome_list_4_3_1":
      "虽然其他类别也可能存在问题，但不那么紧急",
    "faq.answer_2_heading_outcome_list_4_3_2":
      "错误信息通常更加主观。收集更多选票使我们对最终结果更有信心。",
    "faq.answer_2_heading_outcome_list_5": "一旦确定要评估消息，就会发生两件事",
    "faq.answer_2_heading_outcome_list_5_1":
      "所有发送此消息但尚未收到回复的用户都将根据其标签或我们的 CheckMates 给出的平均真实分数收到回复（如果消息未标记为诈骗、可疑或不相关）。",
    "faq.answer_2_heading_outcome_list_5_2":
      "从现在开始，发送此消息的用户将收到基于消息的流行标签/平均真实分数的立即回复。",
    // How can I help and become a fact-checker?
    "faq.question_3": "我如何提供帮助并成为一名事实核查员？",
    "faq.answer_3": "我们很高兴听到您有兴趣帮助打击假新闻和诈骗！",
    "faq.answer_3_cta": "要开始使用，请联系我们 @",
    "faq.answer_3_cta_email": "checkmate@better.sg",
    // What kind of data can CheckMate see and collect from me?
    "faq.question_4": "CheckMate 可以从我这里查看和收集哪些类型的数据？",
    "faq.answer_4a":
      "向 CheckMate 机器人发送消息就像在 Whatsapp 中向某人发送消息一样。 CheckMate 只会接收",
    "faq.answer_4b": "你的号码",
    "faq.answer_4c": "和",
    "faq.answer_4d": "您正在发送的消息",
    "faq.answer_4e": "欲了解更多信息，您可以查看我们的",
    "faq.answer_4f": "隐私政策",
    // How does CheckMate collaborate with ScamShield?
    "faq.question_5": "CheckMate 如何与 ScamShield 合作？",
    "faq.answer_5_1_1": "CheckMate 是一个独立的、非政府发起的非营利组织",
    "faq.answer_5_1_bettersg": "better.sg.",
    "faq.answer_5_1_2":
      "我们知道，打击诈骗和可疑消息需要采取协作方式来保护每个人。这就是为什么我们目前正在探索与",
    "faq.answer_5_2_1": "一旦我们与",
    "faq.answer_5_2_2":
      "当您发送消息并且我们的 CheckMates 将其识别为诈骗时，我们将征求您的同意以匿名方式与以下人员分享该特定消息",
    "faq.answer_5_2_3": "如果你同意",
    "faq.answer_5_2_4": "将该消息纳入国家诈骗数据库，以帮助新加坡打击诈骗。",
    "faq.answer_5_3_1":
      "每条消息都会征求您的同意。您可以选择与以下人员分享一些消息",
    "faq.answer_5_3_2":
      "同时决定不与他人分享。我们将对每条消息单独征求您的同意。",
    "faq.answer_5_4_1":
      "至于您的隐私，请放心，CheckMate 不会共享任何其他有权访问的信息。您的电话号码和身份将保持匿名。",
    // What is ScamShield?
    "faq.question_6": "什么是？",
    "faq.answer_6_1": "是由国家犯罪预防委员会和开放政府产品开发的反诈骗产品。",
    // How long does it take for CheckMate to assess messages?
    "faq.question_7": "CheckMate 评估消息需要多长时间？",
    "faq.answer_7_1":
      "CheckMate 在评估消息时尝试平衡速度和准确性。为了提供可靠的答案，我们通常更愿意让更多的志愿者评估信息。然而，我们知道速度对您来说至关重要。我们通常能够在收到您的消息后数小时内提供评估，并不断努力缩短此时间，而不会影响我们的评估质量。",
    "faq.answer_7_2":
      "我们还引入了混合模型机器学习来协助消息的匹配和分类，这使我们能够更快地响应更广泛的消息。如果我们在发送消息后 24 小时内没有回复您的消息并进行评估，请举报",
    "faq.answer_7_2_link": "这里",
  },
};

export default Faq;
