import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Link from "next/link";
import './signupterm.css';

const TermsConditionMain = () => {
  return (
    <>
      {/* <Breadcrumb title="Terms & Conditions" subTitle="Terms & Conditions" /> */}
      <section className="login-banner bg-white">
        <div className="">
          <div className="lg:flex md:flex  align-content">
           
            <div className=" pl-8 pr-8 m-pl-2 m-login-banner">
              <div className="left">
                <div className="header terms-text-align">
                  <h2 className="max-md:text-[20px]">
                    {/* Welcome Back To */}
                    Welcome to India&apos;s largest education system.
                  </h2><br /><br />
                  <h6 className="child-text-color font-size-16 tracking-normal mb-4">
                    Terms and Conditions of the Helium service
                  </h6>
                  {/* <h5 className="text-red-600">{signupError}</h5> */}
                </div>
                <div className="terms-condition-box">
                <p>
                EFFECTIVE DATE: September 1, 2021 <br /> READ THE FOLLOWING TERMS AND
                    CONDITIONS OF THIS SOFTWARE LICENSE CAREFULLY BEFORE
                    PROCEEDING. <br /> BY PROCEEDING AND CLICKING THE CHECKBOX FOR I
                    agree to the terms of service AND THEN CLICKING ON THE
                    SUBMIT BUTTON, YOU ARE ACCEPTING AND AGREEING TO THE
                    FOLLOWING SOFTWARE LICENSE TERMS AND CONDITIONS. IF YOU ARE
                    NOT WILLING TO BE BOUND BY THE FOLLOWING SOFTWARE LICENSE
                    TERMS AND CONDITIONS, YOU SHOULD CHOOSE DECLINE AND PROMPTLY
                    EXIT THE ZOMEKIT CONNECTED PRODUCT SOFTWARE APPLICATION. THIS
                    LICENSE AGREEMENT REPRESENTS THE ENTIRE AGREEMENT CONCERNING
                    THE ZOME SOFTWARE (SOFTWARE) BETWEEN YOU AND ZOME ENERGY
                    NETWORKS, INC (ZOME), AND IT SUPERSEDES ANY PRIOR PROPOSAL,
                    REPRESENTATION, OR UNDERSTANDING BETWEEN THE PARTIES.1.
                    LICENSE GRANT AND USEa. ZOME grants to You a nonexclusive,
                    non-transferable license to access the Software via your
                    Mobile Device or Browser-based viewing device, including but
                    not limited to computer desktops/laptops and iPads, and to use
                    the machine-readable version of Software, as may be updated
                    from time to time without notice by Licensor at Licensors
                    sole discretion , user manuals and
                    technical materials viewable and printable through Licensors
                    website . The Licensed Software and
                    Documentation are collectively called the. You
                    acknowledge that You have no ownership, rights, title or other
                    interest in the Software apart from that granted hereunder.
                    All rights, title, and interest including, but not limited to,
                    intellectual property interests, in and to the System are the
                    exclusive property of Licensor, and this Agreement shall not
                    be deemed a transfer of title or ownership in any respect.c.
                    You acknowledge that the license granted hereunder is
                    terminable at will by ZOME in its sole and absolute
                    discretion. Termination of the Agreement revokes Your license
                    and ends Your rights. In case of such termination, You will
                    immediately cease use of the System. The terms that by their
                    sense and context are intended to survive performance by
                    either or both parties shall so survive the performance and
                    termination of the Agreement, including without limitation
                    those terms relating to warranty limitations, limitation of
                    liability, remedies or damages, or ZOMEs proprietary
                    rights.d. You acknowledge that the Licensed Software may
                    include software provided by third parties  
                    and the licensor of any Third Party Software
                    embedded in the Licensed Software has a proprietary interest
                    in such software.e. You may view and download any
                    Documentation from ZOME but solely for Your personal,
                    non-commercial use. You will not otherwise, in whole or in
                    part, sublicense, copy, rent, loan, transfer, modify, enhance,
                    prepare derivatives of, decompile, or reverse engineer any
                    portion of the System.f. If any modifications, enhancements,
                    improvements or alterations to the Software are or have been
                    made by ZOME, You or any non-party, either singly or in
                    combination, all such modifications, enhancements,
                    improvements or alterations shall belong exclusively to ZOME.
                    You agree to assign to ZOME any ownership or other right,
                    title and interest in or to any such improvements,
                    enhancements, modifications or alterations and to execute any
                    documents to facilitate said assignment that are requested of
                    it by ZOME.g. Your rights hereunder may not be assigned, sold,
                    transferred, pledged or encumbered in any way. You may not
                    sell, sublicense or rent Software to any third-party. ZOME may
                    assign this Agreement.2. MAINTENANCE. ZOME shall have no
                    obligation to support or maintain Software.3. CONSULTING AND
                    TRAINING. Consulting and training services are not provided
                    under this Agreement.4. PROPRIETARY RIGHTS. You acknowledge
                    that System is a proprietary asset of ZOME.5. ENERGY METERING
                    / AGGREGATOR SERVICES. You acknowledge and agree, by the
                    action of clicking “Submit” to this online contract, to
                    provide access to ZOME of the smart energy meter data for your
                    apartment. Access is needed on a limited basis for when
                    billing reconciliation is required, but on an ongoing basis.
                    You also acknowledge and agree to allow ZOME to act as the
                    sole energy aggregator for energy curtailment services with
                    the energy wholesaler in your region and that You, nor anyone
                    associated with your domicile, are not currently enrolled in
                    any program for Demand Response, curtailment, or smart energy
                    management with another service provider in the domicile
                    represented by the App. Use of the App is tied directly and
                    explicitly to allowing ZOME to act as the sole energy
                    aggregator for your domicile in the energy wholesale
                    electricity grid in your local area. 6. WARRANTIES.ZOME MAKES
                    NO REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER AS TO
                    THE PERFORMANCE OR FUNCTIONALITY OF THE SOFTWARE. THE LICENSE
                    OF SAID SOFTWARE HEREUNDER IS STRICTLY ON AN “AS-IS” BASIS.
                    ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A
                    PARTICULAR PURPOSE WHICH EXCEED THE EXPRESS WARRANTY
                    CONTAINED IN THIS PARAGRAPH ARE HEREBY DISCLAIMED BY ZOME AND
                    ARE EXCLUDED FROM THIS AGREEMENT.7. LIMITATION OF
                    LIABILITY.a. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                    ZOME AND ITS SUPPLIERS, EMPLOYEES, LICENSORS AND BUSINESS
                    PARTNERS (COLLECTIVELY, “ZOME PARTIES) SHALL NOT BE LIABLE TO
                    YOU OR ANY THIRD-PARTY FOR ANY INDIRECT, CONSEQUENTIAL,
                    INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
                    PROFITS AND BUSINESS INTERRUPTION, HOWEVER CAUSED AND ON ANY
                    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY OR
                    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
                    OUT OF THE USE OR DISTRIBUTION OF THE SOFTWARE OR THE SYSTEM,
                    EVEN IF ZOME PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES.b. NOTWITHSTANDING ANYTHING ELSE IN THIS
                    AGREEMENT, THE MAXIMUM LIABILITY THAT ZOME PARTIES SHALL HAVE
                    FOR ANY DAMAGE, LOSS OR LIABILITY ARISING UNDER OR IN
                    CONNECTION WITH THIS AGREEMENT OR THE SOFTWARE, SYSTEM OR
                    SYSTEM COMPONENTS DELIVERED TO YOU HEREUNDER (WHETHER IN
                    CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY,
                    WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE GREATER OF (i) THE
                    AMOUNT ACTUALLY PAID BY YOU TO ZOME FOR THE SOFTWARE, SYSTEM
                    OR SYSTEM COMPONENTS DURING THE SIX (6) MONTH PERIOD
                    IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH DAMAGE,
                    LOSS OR LIABILITY OR (ii) FIVE HUNDRED DOLLARS (USD $500.00).c.
                    YOU ACKNOWLEDGE THAT THE FEES PAID BY YOU REFLECT THE
                    ALLOCATION OF RISK SET FORTH IN THIS AGREEMENT AND THAT ZOME
                    WOULD NOT ENTER INTO THIS AGREEMENT WITHOUT THESE LIMITATIONS
                    ON ITS LIABILITY.d. NOTWITHSTANDING THE FOREGOING, THE
                    EXCLUSIONS OR LIMITATIONS OF WARRANTIES AND LIABILITY
                    CONTAINED IN THIS AGREEMENT SHALL NOT APPLY TO ANY DAMAGES,
                    LOSSES OR LIABILITY CAUSED BY ZOMES GROSS NEGLIGENCE OR
                    INTENTIONAL MISCONDUCT.8. THIRD-PARTY
                    INDEMNIFICATION.You shall defend, indemnify, and hold harmless
                    ZOME and its officers, directors, employees, agents,
                    licensors, and suppliers from and against all liabilities,
                    losses, costs, damages, and expenses (including but not
                    limited to reasonable attorneys fees and expenses) related
                    to, arising out of, or in any way connected with (i) Your use
                    of the System; (ii) Your violation of this Agreement or the
                    rights of any other person or entity; or (iii) any
                    unauthorized use of the System.9. TERM AND TERMINATION.This
                    Agreement is effective until terminated. You may terminate
                    this Agreement at any time by ceasing all use of the System.
                    This Agreement will terminate immediately without notice from
                    ZOME if You fail to comply with any provision of this
                    Agreement. Upon termination, You must destroy all copies of
                    the System. The provisions of this Agreement that protect the
                    proprietary rights of ZOME, disclaim warranties, or limit
                    liability will continue in force after termination.10.
                    GOVERNING LAW. This Agreement is governed by the laws of the
                    State of Georgia, without regard to its conflict of laws
                    principles. You agree to submit to the exclusive jurisdiction
                    of the state and federal courts sitting in the State of
                    Georgia for any dispute, action or proceeding arising out of
                    or related to this Agreement or your use of the System. 11.
                    GENERAL PROVISIONS.a. If any part of this Agreement is
                    determined to be invalid or unenforceable, then such
                    provision will be ineffective to the extent of such
                    determination and will be replaced by an enforceable provision
                    that comes closest to the intention underlying the
                    unenforceable provision.b. You may not sublicense or transfer
                    the license granted hereunder or Your rights in the System.
                    Any attempt to sublicense or transfer any of the rights,
                    duties, or obligations hereunder is void and shall
                    automatically terminate Your rights under this
                    Agreement.c. This Agreement constitutes the entire agreement
                    between the parties with respect to the System and supersedes
                    all prior or contemporaneous understandings regarding such
                    subject matter.d. Any waiver of any term of this Agreement
                    will be effective only if in writing and signed by the party
                    waiving such term. The failure of either party to enforce any
                    provision of this Agreement will not constitute a waiver of
                    the partys rights to subsequently enforce the provision.e.
                    This Agreement may be amended only in writing and signed by
                    both parties.f. All notices required by this Agreement will be
                    given in writing to the addresses set forth on the cover page
                    hereof, or to such other address as either party may specify
                    in writing.g. You agree to comply with all applicable
                    government laws, rules, and regulations relating to Your use
                    of the System. h. No joint venture, partnership, employment,
                    or agency relationship exists between You and ZOME as a result
                    of this Agreement or use of the System.i. This Agreement is
                    for the sole benefit of the parties hereto and their
                    respective successors and assigns, and nothing herein, express
                    or implied, is intended to or shall confer upon any other
                    person or entity any legal or equitable right, benefit or
                    remedy of any nature whatsoever under or by reason of this
                    Agreement.j. The headings in this Agreement are for reference
                    purposes only and will not affect the interpretation or
                    meaning of this Agreement.k. YOU UNDERSTAND AND AGREE THAT
                    YOUR USE OF THE SYSTEM IS AT YOUR SOLE RISK. THE SYSTEM IS
                    PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. ZOME AND
                    ZOME PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND,
                    WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE
                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT. l. You agree that
                    ZOME has the right, at any time and without prior notice, to
                    change the features and functions of the System, including
                    adding or removing functionalities or features, or imposing
                    limits on certain features or restricting access to parts or
                    all of the System. m. You agree that ZOME has the right, at any
                    time and without prior notice, to suspend or discontinue,
                    temporarily or permanently, the System (or any part thereof).
                    n. You agree that ZOME will not be liable to You or to any
                    third party for any modification, suspension, or discontinuance
                    of the System. o. You agree that ZOME has the right, at any
                    time and without prior notice, to modify this Agreement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditionMain;
