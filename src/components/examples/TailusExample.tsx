import StatsCard from "./tailus/Stats"
import {
    NewAffiliatesCard,
    NewCustomersCard,
    NewOrdersCard,
    NewUsersCard
} from "./tailus/StatsOverview"
import Customers from "./tailus/Table"
import TeamMembers from "./tailus/TeamMembers"
import { FeedbackMessage } from "./tailus/FeedbackMessage"
import {FeedbackDialog} from "./tailus/UserFeedbackDialog"

const TailusExample = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-6 mb-6">
                <NewUsersCard />
                <NewAffiliatesCard />
                <NewCustomersCard />
                <NewOrdersCard />
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <StatsCard />
                    <Customers />
                </div>
                <div className="col-span-1 space-y-6">
                    <TeamMembers />
                    <FeedbackMessage />
                    <FeedbackDialog />
                </div>
            </div>
        </div>
    )
}

export default TailusExample