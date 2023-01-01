class Contact < ApplicationRecord
  validates :name, :body, :subject, presence: true
  validates :email, uniqueness: true
end
