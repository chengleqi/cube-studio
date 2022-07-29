"""empty message

Revision ID: bbe894fbed76
Revises: e09de79e861e
Create Date: 2022-07-27 13:47:59.328272

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bbe894fbed76'
down_revision = 'e09de79e861e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dataset',
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.Column('changed_on', sa.DateTime(), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=True),
    sa.Column('label', sa.String(length=200), nullable=True),
    sa.Column('describe', sa.String(length=2000), nullable=True),
    sa.Column('source_type', sa.String(length=200), nullable=True),
    sa.Column('source', sa.String(length=200), nullable=True),
    sa.Column('industry', sa.String(length=200), nullable=True),
    sa.Column('icon', sa.String(length=2000), nullable=True),
    sa.Column('field', sa.String(length=200), nullable=True),
    sa.Column('usage', sa.String(length=200), nullable=True),
    sa.Column('research', sa.String(length=200), nullable=True),
    sa.Column('storage_class', sa.String(length=200), nullable=True),
    sa.Column('file_type', sa.String(length=200), nullable=True),
    sa.Column('status', sa.String(length=200), nullable=True),
    sa.Column('years', sa.String(length=200), nullable=True),
    sa.Column('url', sa.String(length=200), nullable=True),
    sa.Column('path', sa.String(length=200), nullable=True),
    sa.Column('download_url', sa.String(length=200), nullable=True),
    sa.Column('storage_size', sa.String(length=200), nullable=True),
    sa.Column('entries_num', sa.String(length=200), nullable=True),
    sa.Column('duration', sa.String(length=200), nullable=True),
    sa.Column('owner', sa.String(length=200), nullable=True),
    sa.Column('expand', sa.Text(length=65536), nullable=True),
    sa.Column('created_by_fk', sa.Integer(), nullable=True),
    sa.Column('changed_by_fk', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['changed_by_fk'], ['ab_user.id'], ),
    sa.ForeignKeyConstraint(['created_by_fk'], ['ab_user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('dataset')
    # ### end Alembic commands ###