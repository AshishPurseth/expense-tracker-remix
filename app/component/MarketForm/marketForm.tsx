import { Link } from '@remix-run/react';
import { Form, Modal } from '~/common';
import styles from './marketForm.module.scss'

export const MarketForm = () => {
  return (
    <section>
      <Modal>
        <section className={styles.modalHeader}>
          <h2>Add Product</h2>
          <Link className="button primary" to="..">
            Cancel
          </Link>
        </section>
        <Form method="post">
          <input className="input" name="title" type="text" placeholder="Title" required />
          <select className="input" name="category" required>
            <option value="">Choose...</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
          </select>
          <button className="button danger" type="submit">
            Submit
          </button>
        </Form>
      </Modal>
    </section>
  );
};
