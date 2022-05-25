import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import List from "../components/List";
import Tabs from "../components/Tabs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Home = props => {
  const {
    data: {
      Basic: {
        siteMetadata: { domain },
      },
    },
  } = props;
  const title = "Our Principles and Tactics";
  return (
    <Page tabs={<Tabs active={2} />}>
      <SEO title={title}>
        <meta
          content={
            "We believe that great software comes from practical solutions realized through great engineering."
          }
          name="description"
        />
      </SEO>
      <div style={{ textAlign: "center" }}>
        <Typography paragraph variant="h1">
          {title}.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} sx={{ textAlign: "left" }} xs={12}>
            <Divider sx={{ m: "16px 0" }} />
            <Typography
              component="h2"
              gutterBottom
              sx={{
                textAlign: "center",
              }}
              variant="h4"
            >
              Our Principles
            </Typography>
            <Typography component="div" variant="subtitle1">
              <ol>
                <li>
                  <b>
                    Our purpose is working software that solves customer needs.
                  </b>
                  <p />
                  We practice{" "}
                  <a href="https://agilemanifesto.org/principles.html">
                    agile development
                  </a>
                  , but we know that this does not work in every engagement. We
                  flex our approach to meet on-the-ground facts for each
                  customer. Often, this means leveraging "wet agile": a curated
                  mix of waterfall and agile development. At core, we focus on
                  shipping early, getting feedback quickly, iterating, and
                  repeating. We leverage best-of-breed product development
                  techniques to guide our work, including Objectives and Key
                  Results, prioritized user stories, sprint plans and focused
                  kanbans, and retrospectives.
                  <p />
                </li>
                <li>
                  <b>Every feature is tied to customer needs.</b>
                  <p />
                  We don't trust our instincts. We've learned that we're not
                  good at inventing requirements from hypothetical customers or
                  personas. Rather, we tether our plans to actual requirements
                  that we directly hear from customers (or potential customers).
                  <p />
                </li>
                <li>
                  <b>Customers aren't always right.</b>
                  <p />
                  We love to hear customer feature requests. But we lens those
                  requests through a formal product evaluation process. This
                  turns feature ideas into a root cause analysis: what problem
                  is the customer trying to solve (with their feature idea)? The
                  end-result may be quite different than what the customer had
                  in mind.
                  <p />
                </li>
                <li>
                  <b>Innovate through "working ideas"</b>
                  <p />
                  We prefer rapid prototyping with working code to express ideas
                  to refine our thinking and to illustrate our innovations, over
                  slides and documents.
                  <p />
                </li>
                <li>
                  <b>Code is our primary unit of work.</b>
                  <p />
                  We focus on necessary and sufficient planning (and related
                  materials) to allow us to code. We eschew documents and other
                  short-lived artifacts. We avoid meetings. We accelerate
                  time-to-code because we know that building products is the
                  primary way to get feedback, refine ideas, and find
                  product/solution fit.
                  <p />
                </li>
                <li>
                  <b>Engineers lead the way.</b>
                  <p />
                  In many companies, engineers are paradoxically both highly
                  valued <i>and</i> low status. They're the worker bees that are
                  directed what to do by product and project managers. <i>We</i>{" "}
                  believe that engaged engineers should be the center of the
                  action. Technical staff on the front-lines can quickly
                  understand what will work, and what hurdles they might
                  encounter. We trust engineers to take product ownership,
                  engage with customers, and direct where we're going.
                  <p />
                </li>
                <li>
                  <b>We automate whenever possible.</b>
                  <p />
                  <i>
                    "I choose a lazy person to do a hard job. Because a lazy
                    person will find an easy way to do it." – Bill Gates.
                  </i>
                  <p />
                  We often engage with customers in Managed or Enterprise
                  Services. This is where our team takes on the responsibility
                  for setup and configuration of our products for them; it
                  includes report pre-screening, and so on. We love this sort of
                  engagement as we act as our customer's proxy. We dig into our
                  own software in ways that are hard to do without customer
                  guidance. When we do, we often find ourselves performing
                  repetitive or humdrum tasks. When we do, we strive to automate
                  these through new features, systems, and integrations. This is
                  a core way we evolve our products.
                  <p />
                </li>
                <li>
                  <b>We challenge assumptions and directly address problems.</b>
                  <p />
                  <i>
                    "
                    <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxycmNsZWFkZXJzaGlwfGd4OmEyYjI2YjVkMTA3YjEz">
                      Constructive Confrontation
                    </a>{" "}
                    does not mean being loud, unpleasant, or rude, and it is not
                    designed to affix blame. The essence of it is to attack a
                    problem by speaking of it in a businesslike way." – Andy
                    Grove
                  </i>
                  <p />
                  We trace our lineage to Intel. We take many of our core
                  principles and tactics from this exceptional company. This
                  includes a penchant for a flat hierarchy, constructive
                  confrontation, and technical excellence.
                  <p />
                </li>
                <li>
                  <b>We're frugal.</b>
                  <p />
                  <i>
                    [Once found, insert Paul Graham tweet about asking "is that
                    it?" when looking at SaaS companies' low headcount/etc.]
                  </i>
                  <p />
                  Our team has done this before. We've been the VC and
                  bootstrapped routes. Regardless of the approach, we believe
                  that sustainable success comes from the prudent deployment of
                  capital, focus, and engineering. We're not afraid to
                  accelerate our sales motion once we've crafted a successful
                  pipeline. But we do so recognizing that any acceleration has
                  significant risks.
                </li>
              </ol>
            </Typography>
            <Typography
              component="h2"
              gutterBottom
              sx={{
                textAlign: "center",
              }}
              variant="h4"
            >
              Our Tactics
            </Typography>
            <ol>
              <li>
                <b>
                  Our work revolves around documented issues prioritized in a
                  kanban.
                </b>
                <p />
                Github is where we develop our product. It's only natural that
                the feature-making process lives in Github issues (and sometimes
                in Github projects). We insist on feature "paper trails": we
                favor focused discussions in Github issues, versus in
                short-lived, private, or hard-to-find Slack, email, or Zoom.
                While we use these tools, we document feature decisions in
                Github issues.
                <p /> This ensures that new team members can quickly come
                up-to-speed on the rationale behind any feature. Moreover, we
                can link code commits directly to issues. This closes the loop
                in a comprehensively documented feature origination to
                completion process.
                <p />
              </li>
              <li>
                <b>Every significant idea is reflected as an issue.</b>
                <p />
                Great ideas are easily lost. These can be notions to improve a
                process, add a feature, or investigate a bug. Create new issues
                as soon as they are discussed. Categorize and assign them
                appropriately.
                <p />
              </li>
              <li>
                <b>Issues are rejected liberally.</b>
                <p />
                We want a focused list of issues. Add a comment why the issue is
                not worth keeping open. Optionally categorize the issue as "deep
                backlog" if it is worth investigating down the line. And then
                close it. The process of creating and rejecting issues is an
                important documentation step.
                <p />
              </li>
              <li>
                <b>Issues are closed with code commits.</b>
                <p />
                If an issue is viable, it should be closed with a code commit
                message and a Pull Request (PR) note. This knits together issues
                and code, and allows new team members to quickly understand our
                codebase. This better self-documents code.
                <p />
              </li>
              <li>
                <b>
                  Issues that are likely to take more than 8 hours are
                  splintered.
                </b>
                <p />
                It's okay to stub major features as a single issue. But, once a
                decision is made to proceed, break it into smaller issues that
                should take no more than about 8 hours per issue.
                <p />
              </li>
              <li>
                <b>All code is crafted with a focus on quality.</b>
                <p />
                "Quickie" code has a funny habit of becoming production code.
                Spend the time to write proper code. Make sure it is linted
                (automate with Github actions), reviewed, and minimally yet
                sufficiently commented.
                <p />
              </li>
              <li>
                <b>All code is reviewed.</b>
                <p />
                Except for minor typo fixes, all code must be{" "}
                <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests">
                  Pull Requested
                </a>
                . This is a key chance for you to share your work with other
                team members. Moreover, this affords you a learning experience
                from experts; it lets you share your wisdom and collaborate.
                It's a key ritual in our company. Request review from ONE other
                code participant. The reviewer does not need to be the senior
                engineer on the project; it can be anyone who touches the code.
                <p />
              </li>
              <li>
                <b>Pull Requests are sacred.</b>
                <p />
                Our goal is to unblock others. As such, when you are invited to
                review code, make it a priority. Spend time looking at the code,
                versus just blindly LGTM. Try to make at least one improvement
                recommendation, or request for additional information. It's your
                chance to learn, too! If you initiate a PR, make sure that every
                comment is handled: with either new code commits, a reason why
                you choose to reject it, or a new issue.
                <p />
              </li>
              <li>
                <b>
                  Dev setup and PROD deployment are documented in clear READMEs.
                </b>
                <p />
                Keep READMEs clean and up-to-date with the latest instructions
                for deploying and developing code. We don't want new staff
                burdened with convoluted setup of dev environments: document
                every step clearly and succinctly. Moreover, while we automate
                PROD deployment, this process should be articulated through a
                narrative summary of technologies, steps, and debugging
                procedures.
                <p />
              </li>
            </ol>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export const query = graphql`
  query Tactics {
    Basic: site {
      siteMetadata {
        domain
      }
    }
  }
`;

export default Home;
