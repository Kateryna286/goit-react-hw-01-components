//import AppCss from './App.css'
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Section from './components/Section/Section';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Section title="Профиль соцсети">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Секция статистики">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <Section title="Список друзей">
        <FriendList friends={friends} />
      </Section>

      <Section title="История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

//  <section class="statistics">
//         <Section title = "Upload stats">
//             <Statistics title="Upload stats" items={statisticalData} />
//         </Section>
//    </section>
