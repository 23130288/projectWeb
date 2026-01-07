package org.example.projectweb.dao;

public class SupportDao extends BaseDao {

    public void createSupport(int userId, String topic, String title, String message) {
        get().useHandle(h -> {
            int spid = h.createUpdate("""
                insert into support (uid, topic, title, created_date, status)
                values (:uid, :topic, :title, NOW(), "PROCESSING")
                """).bind("uid", userId).bind("topic", topic).bind("title", title)
                    .executeAndReturnGeneratedKeys("spid").mapTo(Integer.class).one();
            createMessage(spid, userId, message);
        });

    }

    public void createMessage(int spid, int senderId, String message) {
        get().useHandle(h -> h.createUpdate("""
                insert into support_message (spid, sender_id, message, created_date)
                values (:spid, :sender_id, :message, NOW())
                """).bind("spid", spid).bind("sender_id", senderId).bind("message", message)
                .execute());
    }
}
